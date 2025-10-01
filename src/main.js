import './style.css';
const slidesEL = document.getElementsByClassName("slide")
const btmNext = document.getElementById("next")
const btmPre = document.getElementById("prev")

btmNext.addEventListener("click", () => {
    const firstEl = document.querySelector(".first")
    firstEl.classList.remove("first")
    if (firstEl.nextElementSibling) {
        firstEl.nextElementSibling.classList.add("first")

    } else {
        slidesEL[0].classList.add("first")
    }
})

btmPre.addEventListener("click", () => {
    const firstEl = document.querySelector(".first")
    firstEl.classList.remove("first")
    if (firstEl.previousElementSibling) {
        firstEl.previousElementSibling.classList.add("first")

    } else {
        slidesEL[slidesEL.length - 1].classList.add("first")
    }
})

setInterval(() => {
  const firstEl = document.querySelector(".first");
  firstEl.classList.remove("first");
  if (currentEl.nextElementSibling) {
    currentEl.nextElementSibling.classList.add("first");
  } else {
    slideEl[0].classList.add("first");
  }
}, 5000);