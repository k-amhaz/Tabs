let tabOne = document.querySelector(".one");
let tabTwo = document.querySelector(".two");
let tabThree = document.querySelector(".three");
let theLi = document.querySelectorAll("li");

activeRemover = theLi.forEach((el) => {
  return el.classList.remove("active");
});

tabOne.addEventListener("click", activeRemover);
tabOne.addEventListener("click", tabOne.classList.add("active"));

tabTwo.addEventListener("click", activeRemover);
tabTwo.addEventListener("click", tabTwo.classList.add("active"));

tabThree.addEventListener("click", activeRemover);
tabThree.addEventListener("click", tabThree.classList.add("active"));
