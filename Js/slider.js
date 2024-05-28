const mySwiper = new Swiper('.buy__swiper', {
    slidesPerView : 1.5,
    spaceBetween : 20,
    speed: 600,
    autoplay: {
        delay : 1000,
    },
    navigation: {
        nextEl : '.swiper-button-next',
        prevEl : '.swiper-button-prev'
    },
    pagination:{
        el:'.swiper-pagination',
        type:'progressbar'
    },
    // autoplay : {
    //     delay:1000
    // },
    mousewheel : {
        swnsitivity:1,
    },                                                                  
    loop : true,
    breakpoints: {
        480: {
            spaceBetween : 40,
            slidesPerView : 2,
        },
        700: {
          slidesPerView: 3,
        },
      }
  });
