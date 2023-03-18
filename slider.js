const slideImages = document.querySelectorAll(".slide-in");

function checkSlide() {
  slideImages.forEach(slideImage => {
    const halfImage = slideImage.height / 2;
    const slideAt = window.scrollY + window.innerHeight - halfImage;
    const imageBottom = slideImage.offsetTop + slideImage.height;
    const isHalfShown = slideAt > slideImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    const slide = isHalfShown && isNotScrolledPast;
    if (slide) {
      slideImage.classList.add("active");
    } else {
      slideImage.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide));

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
