// Input
var base1 = document.getElementById("b1");
var base2 = document.getElementById("b2");
var height = document.getElementById("height");
var calculateBtn = document.getElementById("calc-btn");
var resultBtn = document.getElementById("result");
calculateBtn.addEventListener("click", calculateButton);
var unit = document.getElementById("convertion-unit");

//  Functions & Variables
function calculateButton() {
  let b1 = Number(base1.value);
  let b2 = Number(base2.value);
  let h = Number(height.value);
  let U = unit.value;

  //   Process
  let area = (1 / 2) * (b1 + b2) * h;
  area = area.toFixed(2);

  //   Output
  resultBtn.innerHTML = area + U;

  //   Clear Inputs
  base1.value = "";
  base2.value = "";
  height.value = "";
  document.getElementById("pic-container").innerHTML = "";

  // Change background of inputs
  resultBtn.style.border = "2px solid green";
  resultBtn.style.padding = "5px 10px";
  resultBtn.style.backgroundColor = "yellow";
}

//   Green check mark
var picbtn = document.getElementById("calc-btn");
var piccontainer = document.getElementById("pic-container");
picbtn.addEventListener("click", showPicture);
function showPicture() {
  piccontainer.innerHTML +=
    "<img src = 'images/Green Checkmark image.jpg' width = 50px Height = 50px>";
}
