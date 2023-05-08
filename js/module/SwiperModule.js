export default function SwiperModule() {
    var swiperBrand = new Swiper(".cate-brand-swiper .swiper", {
        slidesPerView: 4,
        spaceBetween: 8,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 5,
                spaceBetween: 8,
            },
            620: {
                slidesPerView: 8,
                spaceBetween: 8,
            },
            900: {
                slidesPerView: 10,
                spaceBetween: 16,
            },
            1200: {
                slidesPerView: 12,
                spaceBetween: 24,
            }
        }
    });
    var swiperCatethumb = new Swiper(".cate-dt-thumb .swiper", {
        slidesPerView: 5,
        spaceBetween: 12,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    if (swiperCatethumb) {
        var swiperCatemain = new Swiper(".cate-dt-main .swiper", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: swiperCatethumb
            }
        });
    }

    var swiperHome = new Swiper(".home-bn-swiper .swiper", {
        speed: 1000,
        autoplay: {
            delay: 3000,
        },
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    const homeBox = document.querySelectorAll('.home-box')
    if (homeBox) {
        homeBox.forEach(item => {
            const homeBoxSlide = item.querySelector('.swiper')
            const homeBoxPrev = item.querySelector('.ctrl-prev')
            const homeBoxNext = item.querySelector('.ctrl-next')
            var swiperProd = new Swiper(homeBoxSlide, {
                slidesPerView: 6,
                spaceBetween: 24,
                navigation: {
                    nextEl: homeBoxNext,
                    prevEl: homeBoxPrev
                },
                breakpoints: {
                    0: {
                        slidesPerView: 3,
                        spaceBetween: 8,
                    },
                    600: {
                        slidesPerView: 4,
                        spaceBetween: 8,
                    },
                    980: {
                        slidesPerView: 8,
                        spaceBetween: 24,

                    }
                }
            });
        })
    }

    const homeBoxf = document.querySelectorAll('.home-box.wf')
    if (homeBoxf) {
        homeBoxf.forEach(item => {
            const homeBoxSlide = item.querySelector('.swiper')
            const homeBoxPrev = item.querySelector('.ctrl-prev')
            const homeBoxNext = item.querySelector('.ctrl-next')
            var swiperProd = new Swiper(homeBoxSlide, {
                slidesPerView: 6,
                spaceBetween: 8,
                navigation: {
                    nextEl: homeBoxNext,
                    prevEl: homeBoxPrev
                },
                breakpoints: {
                    0: {
                        slidesPerView: 3,
                        spaceBetween: 8,
                    },
                    600: {
                        slidesPerView: 4,
                        spaceBetween: 8,
                    },
                    980: {
                        slidesPerView: 8,
                        spaceBetween: 24,

                    }
                }
            });

        })
    }


    // certi 
    const certi = document.querySelectorAll('.certi-block')
    certi.forEach(item => {
        const certiSwiper = item.querySelector('.swiper')
        const pagi = item.querySelector('.swiper-pagination')

        var swiperCerti = new Swiper(certiSwiper, {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
                el: pagi,
                clickable: true,
            },
        });
    })

    // 

    var swiperVid = new Swiper(".home-blog-vid-slide .swiper", {
        navigation: {
            nextEl: ".ctrl .ctrl-nav .next",
            prevEl: ".ctrl .ctrl-nav .prev",
        },
        pagination: {
            el: ".ctrl .ctrl-pagi",
            clickable: true
        }
    });

    var swiperabSlide = new Swiper(".about-block-slide .swiper", {
        slidesPerView: 3,
        spaceBetween: 24,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });


    var swiperProj = new Swiper(".about-proj-slide .swiper", {
        pagination: {
            el: ".about-proj-pagi",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".about-proj-ctrl .next",
            prevEl: ".about-proj-ctrl .prev",
        },
    });

    // 
    var swiperYear = new Swiper(".about-process-year .swiper", {
        slidesPerView: "auto",
        spaceBetween: 120,
        freeMode: true,

        breakpoints: {
            0: {
                slidesPerView: 2.5,
                spaceBetween: 30,
            },
            1080: {
                slidesPerView: "auto",
                spaceBetween: 120,
            }
        }
    });
    var swiperProc = new Swiper(".about-process-img .swiper", {
        slidesPerView: 1.5,
        spaceBetween: 24,
        reverseDirection: false,
        slideToClickedSlide: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.5,
                spaceBetween: 24,
                centeredSlides: false,
            },
            600: {
                slidesPerView: 4,
                spaceBetween: 24,
                centeredSlides: true,
            },
            1080: {
                slidesPerView: 1.5,
                spaceBetween: 24,
                centeredSlides: false,
            }
        }
    });
    var swiperPrcText = new Swiper(".about-process-text .swiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".about-process-ctrl .next",
            prevEl: ".about-process-ctrl .prev",
        },
        thumbs: {
            swiper: swiperYear,
        }
    });

    swiperProc.controller.control = swiperPrcText;
    swiperPrcText.controller.control = swiperProc;

    var teamSwiper = new Swiper(".teamSwiper", {
        slidesPerView: 1,
        spaceBetween: 24,
        autoplay: 2000,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          400: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 2.5,
          },
        },
      });

    var promoSwiper = new Swiper(".promoSwiper", {
    slidesPerView: "auto",
    autoplay: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    });
    // a
    // const bnHome = document.querySelector('.banner-swiper');
    // if (bnHome) {
    //     const numCount = bnHome.querySelector('.num');
    //     var bannerSwiper = new Swiper(".banner-swiper", {
    //         speed:1000,
    //         pagination: {
    //           el: ".swiper-pagination",
    //           clickable: true,
    //           renderBullet: function (index, className) {
    //             return '<span class="' + className + '">'+ '0' + (index + 1) + "</span>";
    //         }
    //         },
    //         navigation: {
    //           nextEl: ".swiper-button-next",
    //           prevEl: ".swiper-button-prev",
    //         },
    //       });
    //       const bnHomeIt = bnHome.querySelectorAll ('.bn-it');
          
    //       if (bnHomeIt) {
    //         bnHomeIt.forEach ((bnIt) => {
    //             const thumbIt = bnIt.querySelector('.thumb-swiper');
    //             const thumbSwiper = new Swiper(thumbIt, {
    //                 slidesPerView: "auto",
    //                 speed:1000,

    //                 // freeMode: true,
    //                 // watchSlidesProgress: true,
    //                 });
                
    //             const galleryIt = bnIt.querySelector('.banner-swiper-gallery');
                
    //             const gallerySwiper = new Swiper(galleryIt, {
    //                 spaceBetween: 24,
    //                 speed:1000,

    //                 thumbs: {
    //                     swiper: thumbSwiper,
    //                 },
    //                 });    
    //         })
    //       }
    // }

    // b
    const bnSlider = document.querySelector('.bnner-slide');
    if (bnSlider) {
        var bnnerThumb = new Swiper(".thumb-swiper", {
            spaceBetween: 10,
            slidesPerView: 3,
            freeMode: true,
            watchSlidesProgress: true,
          });
          var bnnerSwiper = new Swiper(".bnner-swiper", {
              // spaceBetween: 10,
              loop: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                return '<span class="' + className + '">'+ '0' + (index + 1) + "</span>";
            }
            },
            
            thumbs: {
              swiper: bnnerThumb,
            },
          });
    }

}