/** 
  * JAVASCRIPT CODE
  * -------------------------------------------------------------------------------------------------------------------------------
  * @file: scripts.js
  * @description: All functions ans interactive process for web Pages 
  * @version : 1.0
  * @author : Carlos Andres Garcia Morales<agzsoftsi@gmail.com>.
  * @supported : Google Chrome, Mozilla Firefox, Microsoft Edge, Opera, Maxthon.
  *---------------------------------------------------------------------------------------------------------------------------------                              
*/


/**
 * JQuery Configurations for carrusel and interactive animations for Bootstrap components
 */
$('#popular-carousel').carousel({
  interval: 10000
})

$('#popular-carousel .carousel-item').each(function(){
    var minPerSlide = 3;
    var next = $(this).next();

    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
        	  next = $(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo($(this));
    }
});

$('#latest-carousel').carousel({
  interval: 10000
})

$('#latest-carousel .carousel-item').each(function(){
    var minPerSlide = 3;
    var next = $(this).next();

    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
        	  next = $(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo($(this));
    }
});

/**
 * JQuery Configurations for carrusel and interactive animations for Bootstrap components
 */

class UI {
  constructor () {
    this.testimonialLoader = document.querySelector('#testimonial-loader');
    this.testimonialCarousel = document.querySelector('#testimonial-carousel');
    this.testimonialCarouselInner = document.querySelector('#testimonial-carousel .carousel-inner');
    this.popularLoader = document.querySelector('#popular-loader');
    this.popularCarousel = document.querySelector('#popular-carousel');
    this.popularCarouselInner = document.querySelector('#popular-carousel .carousel-inner');
    this.latestLoader = document.querySelector('#latest-loader');
    this.latestCarousel = document.querySelector('#latest-carousel');
    this.latestCarouselInner = document.querySelector('#latest-carousel .carousel-inner');
    this.keywordsField = document.querySelector('#keywords');
    this.topicField = document.querySelector('#topic');
    this.sortField = document.querySelector('#sort-by');
    this.coursesLoader = document.querySelector('#courses-loader');
    this.numberCourses = document.querySelector('#courses-loader + h6');
    this.courseListing = document.querySelector('#course-listing');
  }

  showTestimonials (testimonials) {
    testimonials.forEach(testimonial => {
      const div = document.createElement('div');

      div.classList.add('carousel-item');
      div.innerHTML = `
        <div class="d-flex align-items-center pt-5">
          <img src="${testimonial.pic_url}" alt="${testimonial.name} Avatar" class="rounded-circle">
          <div class="text-white testimonial-text">
            <h4>${testimonial.text}</h4>
            <p class="font-weight-bold">${testimonial.name}</p>
            <p class="font-italic">${testimonial.title}</p>
          </div>
        </div>
      `;
      this.testimonialCarouselInner.appendChild(div);
    });
    this.testimonialCarouselInner.children[0].classList.add('active');
    this.testimonialLoader.classList.add('d-none');
    this.testimonialCarousel.classList.remove('d-none');
  }

  showPopularVideos (videos) {
    videos.forEach(video => {
      this.popularCarouselInner.appendChild(this.createCarouselVideoCard(video));
    });

    $('#popular-carousel').carousel({
      interval: 10000
    });

    $('#popular-carousel .carousel-item').each(function () {
      var minPerSlide = 3;
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));

      for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
      }
    });

    this.popularCarouselInner.children[0].classList.add('active');
    this.popularLoader.classList.add('d-none');
    this.popularCarousel.classList.remove('d-none');
  }

  showLatestVideos (videos) {
    videos.forEach(video => {
      this.latestCarouselInner.appendChild(this.createCarouselVideoCard(video));
    });

    $('#latest-carousel').carousel({
      interval: 10000
    });

    $('#latest-carousel .carousel-item').each(function () {
      var minPerSlide = 3;
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));

      for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
      }
    });

    this.latestCarouselInner.children[0].classList.add('active');
    this.latestLoader.classList.add('d-none');
    this.latestCarousel.classList.remove('d-none');
  }

  createCarouselVideoCard (video) {
    const div = document.createElement('div');

    div.classList.add('carousel-item');
    div.innerHTML = `
      <div class="col-md-6 col-lg-3">
        <div class="card card-body">
          <div class="video">
            <img class="img-fluid" src="${video.thumb_url}" alt="">
            <img src="images/play.png" alt="" class="play-btn">
          </div>
          <h5 class="card-title font-weight-bold mt-3">${video.title}</h5>
          <p class="card-text">${video['sub-title']}</p>
          <div class="tutorial-author d-flex align-items-center">
            <img src="${video.author_pic_url}" alt="" class="rounded-circle">
            <span class="ml-2 font-weight-bold">${video.author}</span>
          </div>
          <div class="mt-3 tutorial-info d-flex justify-content-between align-items-center">
            <span class="rating">
              <img src="images/star_${video.star >= 1 ? 'on' : 'off'}.png" alt="">
              <img src="images/star_${video.star >= 2 ? 'on' : 'off'}.png" alt="">
              <img src="images/star_${video.star >= 3 ? 'on' : 'off'}.png" alt="">
              <img src="images/star_${video.star >= 4 ? 'on' : 'off'}.png" alt="">
              <img src="images/star_${video.star >= 5 ? 'on' : 'off'}.png" alt="">
            </span>
            <span class="length font-weight-bold video-duration">${video.duration}</span>
          </div>
        </div>
      </div>
    `;

    return div;
  }

  showCourses (courses) {
    this.numberCourses.textContent = `${courses.length} results`;
    courses.forEach(course => {
      const div = document.createElement('div');

      div.className = 'col-md-6 col-lg-4 col-xl-3 my-4';
      div.innerHTML = `
        <div class="card card-body">
          <div class="video">
            <img class="img-fluid" src="${course.thumb_url}" alt="">
            <img src="images/play.png" alt="" class="play-btn">
          </div>
          <h5 class="card-title font-weight-bold mt-3">${course.title}</h5>
          <p class="card-text">${course['sub-title']}</p>
          <div class="tutorial-author d-flex align-items-center">
            <img src="${course.author_pic_url}" alt="" class="rounded-circle">
            <span class="ml-2 font-weight-bold">${course.author}</span>
          </div>
          <div class="mt-3 tutorial-info d-flex justify-content-between align-items-center">
            <span class="rating">
              <img src="images/star_${course.star >= 1 ? 'on' : 'off'}.png" alt="">
              <img src="images/star_${course.star >= 2 ? 'on' : 'off'}.png" alt="">
              <img src="images/star_${course.star >= 3 ? 'on' : 'off'}.png" alt="">
              <img src="images/star_${course.star >= 4 ? 'on' : 'off'}.png" alt="">
              <img src="images/star_${course.star >= 5 ? 'on' : 'off'}.png" alt="">
            </span>
            <span class="length font-weight-bold">${course.duration}</span>
          </div>
        </div>
      `;

      this.courseListing.appendChild(div);
    });

    this.coursesLoader.classList.add('d-none');
    this.numberCourses.classList.remove('d-none');
    this.courseListing.classList.remove('d-none');
  }

  updateCourses (courses) {
    this.clearCourses();
    this.showCourses(courses);
  }

  clearCourses () {
    this.numberCourses.classList.add('d-none');
    this.courseListing.classList.add('d-none');
    this.coursesLoader.classList.remove('d-none');

    while (this.courseListing.firstElementChild) {
      this.courseListing.firstElementChild.remove();
    }
  }
}

class SmileSchool {
  async getTestimonials () {
    let res = await window.fetch('https://smileschool-api.hbtn.info/quotes');
    res = await res.json();
    return res;
  }

  async getPopularVideos () {
    let res = await window.fetch('https://smileschool-api.hbtn.info/popular-tutorials');
    res = await res.json();
    return res;
  }

  async getLatestVideos () {
    let res = await window.fetch('https://smileschool-api.hbtn.info/latest-videos');
    res = await res.json();
    return res;
  }

  async getCourses () {
    let res = await window.fetch('https://smileschool-api.hbtn.info/courses');
    res = await res.json();
    return res;
  }

  async getFilteredCourses (keywords, topic, sortBy) {
    let res = await window.fetch(`https://smileschool-api.hbtn.info/courses?q=${keywords}&topic=${topic}&sort=${sortBy}`);
    res = await res.json();
    return res;
  }
}

const App = (function () {
  let ui;
  let smileschool;

  function init () {
    // Determine which page user is on
    const view = document.querySelector('body').id;

    // Instantiate UI and API controllers
    ui = new UI();
    smileschool = new SmileSchool();

    // Populate page
    paint(view);
  }

  function paint (view) {
    // Render testimonials section
    if (view === 'homepage' || view === 'pricing') {
      // Fetch testimonials from API
      smileschool.getTestimonials()
        .then(data => {
          // Display testimonials
          ui.showTestimonials(data);
        });
    }

    // Render most popular and latest videos
    if (view === 'homepage') {
      // Fetch popular videos from API
      smileschool.getPopularVideos()
        .then(data => {
          // Display popular videos
          ui.showPopularVideos(data);
        });
      // Fetch latest videos from API
      smileschool.getLatestVideos()
        .then(data => {
          // Display latest videos
          ui.showLatestVideos(data);
        });
    }

    // Render course listing
    if (view === 'courses') {
      // Fetch courses from API
      smileschool.getCourses()
        .then(data => {
          // Display courses
          ui.showCourses(data.courses);
        });

      // Listen for changes in search/filter fields
      ui.keywordsField.addEventListener('input', filterCourses);
      ui.topicField.addEventListener('input', filterCourses);
      ui.sortField.addEventListener('input', filterCourses);
    }
  }

  function filterCourses () {
    // Get values of search/filter fields
    const keywords = ui.keywordsField.value;
    const topic = ui.topicField.value;
    const sortBy = ui.sortField.value;

    // Fetch matching courses from API
    smileschool.getFilteredCourses(keywords, topic, sortBy)
      .then(data => {
        // Update display
        ui.updateCourses(data.courses);
      });
  }

  return {
    init
  };
})();

// Start rendering content on page load
document.addEventListener('DOMContentLoaded', App.init);
