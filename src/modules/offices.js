// offices cities bottom menu

const officesSelect = document.querySelector(".offices__select");
const citiesbottomMenu = document.querySelector(".citiesbottom__menu");
const citiestopMenuList = document.querySelector(".citiestop__menu-list");

officesSelect.addEventListener("click", () => {
  officesSelect.classList.toggle("offices__select-active");
  citiestopMenuList.classList.toggle("citiestop__menu-list--active");
  citiesbottomMenu.classList.toggle("citiesbottom__menu-active");
});

// offices slider

const slides = document.querySelectorAll('.slider__item');
const btns = document.querySelectorAll('.slider__btn');

let index = 0;


const activeSLide = (numberSlide) => {
    slides.forEach(slide => {
        slide.classList.remove('slider__item-active');
    });

    slides[numberSlide].classList.add('slider__item-active');
}

const activeBtn = (numberBtn) => {
    btns.forEach(btn => {
      btn.classList.remove('slider__btn-active');
    });

    btns[numberBtn].classList.add('slider__btn-active');
}

btns.forEach((btn, indexBtn) => {
  btn.addEventListener('click', function (e) {
      index = indexBtn;
      activeSLide(index);
      activeBtn(index);
  })
})