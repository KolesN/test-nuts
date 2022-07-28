const newsSlider = document.querySelector('.news-wrapper')
const news = document.querySelectorAll('.news-content')
const nextButton = document.querySelector('.next')
const prevButton = document.querySelector('.prev')
let currentSlide = 0
const maxWidth = newsSlider.scrollWidth - newsSlider.clientWidth
const maxCounter = news.length

const makeActive = (content, current) => {
  content.forEach(item => item.classList.remove('active'))
  content[current].classList.add('active')
}

nextButton.addEventListener('click', () => {
  currentSlide = currentSlide === maxCounter - 1 ? 0 : currentSlide + 1
  newsSlider.scrollLeft =
    newsSlider.scrollLeft === maxWidth
      ? newsSlider.scrollLeft - maxWidth
      : newsSlider.scrollLeft + 250
  makeActive(news, currentSlide)
  console.log(newsSlider.scrollLeft)
})

makeActive(news, currentSlide)
console.log(maxWidth)