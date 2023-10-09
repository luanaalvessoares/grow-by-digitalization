document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.card-carousel', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            992: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            }
        }
    });
});

function getCurrentYear() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return currentYear;
}
  
const yearElement = document.getElementById('current-year');
yearElement.textContent = getCurrentYear();
  

function getCurrentDate() {
    const currentDate = new Date();
    const formatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString(undefined, formatOptions);

    return formattedDate;
}

const dateElement = document.getElementById('update-terms');
dateElement.textContent = getCurrentDate();
  