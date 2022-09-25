let tabOne = document.querySelector(".one");
let tabTwo = document.querySelector(".two");
let tabThree = document.querySelector(".three");
let theLi = document.querySelectorAll("li");

activeRemover = theLi.forEach((el) => {
  el.classList.remove("active");
});

tabOne.onclick = function () {
  tabOne.classList.add("active");
  tabTwo.classList.remove("active");
  tabThree.classList.remove("active");
  document.querySelector(".content.o").classList.add("active");
  document.querySelector(".content.t").classList.remove("active");
  document.querySelector(".content.tw").classList.remove("active");
};

tabTwo.onclick = function () {
  tabTwo.classList.add("active");
  tabOne.classList.remove("active");
  tabThree.classList.remove("active");
  document.querySelector(".content.o").classList.remove("active");
  document.querySelector(".content.t").classList.remove("active");
  document.querySelector(".content.tw").classList.add("active");
};

tabThree.onclick = function () {
  tabThree.classList.add("active");
  tabTwo.classList.remove("active");
  tabOne.classList.remove("active");
  document.querySelector(".content.o").classList.remove("active");
  document.querySelector(".content.t").classList.add("active");
  document.querySelector(".content.tw").classList.remove("active");
};
