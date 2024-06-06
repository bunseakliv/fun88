const items = document.querySelectorAll(".headlines li");
let current = 0;

setInterval(() => {
  const prevItem = items[current];
  prevItem.classList.remove("active");

  current = (current + 1) % items.length;

  prevItem.addEventListener("transitionend", () => {
    items[current].classList.add("active");
  });
}, 3000);

// document.addEventListener('DOMContentLoaded', function () {
//   const swiper = new Swiper('.swiper-container', {
//       loop: true,
//       autoplay: {
//           delay: 5000, // 5 seconds
//           disableOnInteraction: false,
//       },
//       on: {
//           init: function () {
//               updateProgressBar();
//           },
//           slideChange: function () {
//               updateProgressBar();
//           },
//           autoplayTimeLeft: function (s, time, progress) {
//               updateProgressBar(progress);
//           },
//       },
//   });

//   function updateProgressBar(progress = 0) {
//       const progressBars = document.querySelectorAll('.progressBar');
//       progressBars.forEach((bar) => {
//           bar.style.width = `${progress * 100}%`;
//       });
//   }
// });
  function url() {
      location.href="https://www.hay8833.com/?inviteCode=3128320";
  }
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 1,
  // effect: "cube",
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      const currentSlide = s.slides[s.activeIndex];
      const progressBar = currentSlide.querySelector(".progressBar");
      if (progressBar) {
        const widthPercentage = parseFloat(progress) * 100;
        progressBar.style.width = widthPercentage + "%";
      }
    },
  },
});


function OpenNav() {
  document.getElementById("Nav").style.width="100%"
}
function CloseNav() {
  document.getElementById("Nav").style.width="0"
}

// url
function url() {
    location.href="https://www.hay8833.com/?inviteCode=3128320";
}

// scroll down header
window.onscroll = function () {
 scrollFunction();
};

function scrollFunction() {
 if (document.documentElement.scrollTop > 80) {
   document.getElementById("navbar").style.top = "0";
 } else {
   document.getElementById("navbar").style.top = "-150px";
 }
}