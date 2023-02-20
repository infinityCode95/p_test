const businessItems = document.querySelectorAll(".business__item");
const businessItemsContent = document.querySelectorAll(".business__item-content");
const businessItemsTitles = document.querySelectorAll(".business__item-title");
const businessItemsText = document.querySelectorAll('.business__item-text');

let index = 0;

// Написал эту функцию, чтобы не повторять код для каждого активного элемента. 
const activeElements = (elements, numberItem, className) => {
  elements.forEach((element) => {
    element.classList.remove(className);
  });

  elements[numberItem].classList.add(className);
}

// Анимация при наведении  
businessItems.forEach((businessItem, indexItem) => {
  businessItem.addEventListener("mouseover", function () {
    index = indexItem;
    activeElements(businessItemsContent, index,'business__item-content-show');
  });
});

// Открытие каждого эдемента по клику  
businessItemsTitles.forEach((businessItemTitle, indexItem) => {
  businessItemTitle.addEventListener("click", function () {
    businessItemTitle.classList.toggle('business__item-title-active');
    index = indexItem;
    activeElements(businessItems, index, 'business__item-active');
    activeElements(businessItemsText, index, 'business__item-text-active');
  });
});


