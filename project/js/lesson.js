//  phone

const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneResult = document.querySelector("#phone_result");

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/;

phoneButton.onclick = () => {
  if (regExp.test(phoneInput.value)) {
    phoneResult.innerHTML = "OK";
    phoneResult.style.color = "green";
  } else {
    phoneResult.innerHTML = " NOT OK";
    phoneResult.style.color = "red";
  }
};

// TAB SLIDER

const tabContentBloks = document.querySelectorAll(".tab_content_block");
const tabItems = document.querySelectorAll(".tab_content_item");
const tabParent = document.querySelector(".tab_content_items");
let currentTabIndex = 0;
let sliderInterval;

const hideTabContent = () => {
  tabContentBloks.forEach((item) => {
    item.style.display = "none";
  });

  tabItems.forEach((item) => {
    item.classList.remove("tab_content_item_active");
  });
};

const showTabContent = (index = 0) => {
  tabContentBloks[index].style.display = "block";
  tabItems[index].classList.add("tab_content_item_active");
  currentTabIndex = index;
};

hideTabContent();
showTabContent();

const autoSlider = (i = 0) => {
  clearInterval(sliderInterval);
  sliderInterval = setInterval(() => {
    i++;
    if (i > tabContentBloks.length - 1) {
      i = 0;
    }
    hideTabContent();
    showTabContent(i);
  }, 3000);
};

tabParent.onclick = (event) => {
  if (event.target.classList.contains("tab_content_item")) {
    tabItems.forEach((item, index) => {
      if (event.target === item) {
        hideTabContent();
        showTabContent(index);
        autoSlider(index);
      }
    });
  }
};
autoSlider(currentTabIndex);
