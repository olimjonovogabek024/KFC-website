
const track = document.querySelector('.carousel-track');
const images = Array.from(track.children);
const imageCount = images.length - 1; 
let currentIndex = 0;

function moveToNextImage() {
  currentIndex++;


  if (currentIndex > imageCount) {
    track.style.transition = 'none'; 
    currentIndex = 0; 
    track.style.transform = `translateX(${-(currentIndex * 100)}%)`;
    setTimeout(() => {
      track.style.transition = 'transform 0.5s ease-in-out'; 
    }, 50);
  } else {

    track.style.transform = `translateX(${-(currentIndex * 100)}%)`;
  }
}


setInterval(moveToNextImage, 4000);
