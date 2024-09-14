document.querySelectorAll('.carousel-control-prev, .carousel-control-next').forEach(control => {
    control.addEventListener('click', function () {
      const carousel = document.querySelector('#educationCarousel');
      const carouselInstance = bootstrap.Carousel.getInstance(carousel);
      carouselInstance.next();
    });
  });
  