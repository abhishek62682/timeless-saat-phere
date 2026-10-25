


const IMAGE_LIST_URL = [
    "https://static.wixstatic.com/media/c33238_295be364138845409c9883c2b85c4691~mv2.jpg/v1/fill/w_2840,h_1470,q_90,enc_avif,quality_auto/c33238_295be364138845409c9883c2b85c4691~mv2.jpg",
    
    "https://static.wixstatic.com/media/c33238_5045d226eda849c08eae23995e839d52~mv2.jpg/v1/fill/w_2880,h_1470,fp_0.53_0.57,q_90,enc_avif,quality_auto/c33238_5045d226eda849c08eae23995e839d52~mv2.jpg",
    "https://static.wixstatic.com/media/c33238_545074b379074a73bfa8b131a83ac6fd~mv2.jpg/v1/fill/w_2880,h_1470,fp_0.5_0.81,q_90,enc_avif,quality_auto/c33238_545074b379074a73bfa8b131a83ac6fd~mv2.jpg",
    "https://static.wixstatic.com/media/c33238_8071fe6332c6419bac175168e685fde5~mv2.jpg/v1/fill/w_2880,h_1470,fp_0.51_0.52,q_90,enc_avif,quality_auto/c33238_8071fe6332c6419bac175168e685fde5~mv2.jpg",
    

]



const heroBgElement = document.getElementById("hero-background-image");

let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % IMAGE_LIST_URL.length;
  heroBgElement.src = IMAGE_LIST_URL[currentIndex];
}, 2000);



// var testimonialSwiper = new Swiper(".testimonial-swiper", {
//       freeMode: true,
//       autoHeight: false,
//       navigation: {
//         nextEl: ".carousel-right",
//         prevEl: ".carousel-left",
//       },
//       breakpoints: {
//         0:    { slidesPerView: 1, spaceBetween: 15 },
//         768:  { slidesPerView: 2, spaceBetween: 20 },
//         1024: { slidesPerView: 2, spaceBetween: 30 },
//       }
//     });



//     var swiper = new Swiper(".gallerySwiper", {
//     slidesPerView: 5,
//     spaceBetween: 10,
//     loop: true,
//     speed: 5000,

//     autoplay: {
//       delay: 0,
//       disableOnInteraction: false,
//     },
//   });