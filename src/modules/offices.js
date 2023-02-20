// Функционал для cities top menu

const officesSelect = document.querySelector(".offices__select");
const citiesbottomMenu = document.querySelector(".citiesbottom__menu");
const citiestopMenuList = document.querySelector(".citiestop__menu-list");
const officesMap = document.querySelector(".offices__map");

officesSelect.addEventListener("click", () => {
  officesSelect.classList.toggle("offices__select-active");
  citiestopMenuList.classList.toggle("citiestop__menu-list--active");
  officesMap.classList.toggle("offices__map-active");
  citiesbottomMenu.classList.toggle("citiesbottom__menu-active");
});

// Переключение карт

const slides = document.querySelectorAll(".slider__item");
const btns = document.querySelectorAll(".slider__btn");

let index = 0;

const activeSLide = (numberSlide) => {
  slides.forEach((slide) => {
    slide.classList.remove("slider__item-active");
  });

  slides[numberSlide].classList.add("slider__item-active");
};

const activeBtn = (numberBtn) => {
  btns.forEach((btn) => {
    btn.classList.remove("slider__btn-active");
  });

  btns[numberBtn].classList.add("slider__btn-active");
};

btns.forEach((btn, indexBtn) => {
  btn.addEventListener("click", function (e) {
    index = indexBtn;
    activeSLide(index);
    activeBtn(index);
  });
});

// DropDown меню

document.querySelectorAll(".dropdown").forEach(function (dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector(".dropdown__button");
  const dropDownList = dropDownWrapper.querySelector(".dropdown__list");
  const dropDownListItems = dropDownList.querySelectorAll(
    ".dropdown__list-item"
  );
  const dropDownInput = dropDownWrapper.querySelector(
    ".dropdown__input-hidden"
  );

  // Клик по кнопке. Открыть/Закрыть select
  dropDownBtn.addEventListener("click", function (e) {
    dropDownList.classList.toggle("dropdown__list--visible");
    this.classList.add("dropdown__button--active");
  });

  // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener("click", function (e) {
      e.stopPropagation();
      dropDownBtn.innerText = this.innerText;
      dropDownBtn.focus();
      dropDownInput.value = this.dataset.value;
      dropDownList.classList.remove("dropdown__list--visible");
    });
  });

  // Клик снаружи дропдауна. Закрыть дропдаун
  document.addEventListener("click", function (e) {
    if (e.target !== dropDownBtn) {
      dropDownBtn.classList.remove("dropdown__button--active");
      dropDownList.classList.remove("dropdown__list--visible");
    }
  });

  // Нажатие на Tab или Escape. Закрыть дропдаун
  document.addEventListener("keydown", function (e) {
    if (e.key === "Tab" || e.key === "Escape") {
      dropDownBtn.classList.remove("dropdown__button--active");
      dropDownList.classList.remove("dropdown__list--visible");
    }
  });
});
