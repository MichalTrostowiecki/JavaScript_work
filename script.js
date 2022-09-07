const dropDownbtn = document.querySelector(".dropDownbtn");

dropDownbtn.addEventListener("click", () => {
  const myDropDown = document.querySelector("#myDropDown");
  myDropDown.classList.toggle("show");
});
