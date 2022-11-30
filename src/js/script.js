// let slider = $(document).ready(function () {
//   $('.your-class').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     dots: true,
//     infinite: true
//   });
// });
'use strict';
const humb = document.querySelector('#burger');
const humbBody = document.querySelector('#burger-menu');


humb.addEventListener('click', humbHandler);
function humbHandler(e) {
   e.preventDefault();
   humbBody.classList.toggle("open");
   humb.classList.toggle('active');
}

