/** Make a parent div */
var parentDiv = document.createElement("div");
parentDiv.className = "parentDiv";
parentDiv.id = "parentDiv";
parentDiv.style.border = "4px solid black";
parentDiv.style.width = "50%";
parentDiv.style.maxHeight = "75%";
parentDiv.style.aspectRatio = 1;
parentDiv.style.display = "grid";
parentDiv.style.whiteSpace = "nowrap";
parentDiv.style.margin = "auto";

/** Attach it to body */
var body = document.body;
body.appendChild(parentDiv);

/** Default hover color of black */
var hoverColor = "black";

/**  Create a grid of 16x16 within parent div*/
var defaultSize = 16;
createGrid(defaultSize);

/** function to create new grid */
function createGrid(gridSize) {
  //Reset grid
  parentDiv.innerHTML = "";
  parentDiv.style.gridTemplateColumns = `repeat(${gridSize},1fr)`;
  //Reset hover color
  hoverColor = "black";

  for (var i = 0; i < gridSize * gridSize; i++) {
    var d = document.createElement("div");
    d.className = "childDiv";
    d.id = "childDiv" + i;
    parentDiv.appendChild(d);
  }
  var childDivArray = Array.from(document.querySelectorAll(".childDiv"));
  childDivArray.forEach((item) => {
    item.addEventListener("mouseover", function () {
      item.style.backgroundColor = hoverColor;
    });
  });
}

/** Color palette */
var colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("change", () => {
  changeHoverColor(colorPicker.value);
});

/** function to change hover color */
function changeHoverColor(color) {
  hoverColor = color;
  colorPicker.value = color;
}

/** function to change grid size */
function changeSize(newSize) {
  createGrid(newSize);
}

/** Hover with blue ink */
var changeBlueButton = document.getElementById("hoverBlue");
changeBlueButton.addEventListener("click", () => {
  changeHoverColor("#0000ff");
});

/** Hover with black ink */
var changeBlackButton = document.getElementById("hoverBlack");
changeBlackButton.addEventListener("click", () => {
  changeHoverColor("#000000");
});

/** Hover with random color ink */
var changeRGB = document.getElementById("RGB");
changeRGB.addEventListener("click", () => {
  var randomColor = getRandomColor();
  changeHoverColor(randomColor);
  changeRGB.style.backgroundColor = randomColor;
});

/** function to generate random color */
function getRandomColor() {
  var code = "0123456789abcdef";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += code[Math.floor(Math.random() * 16)];
  }
  return color;
}

/** Start erasing with white color*/
var eraseButton = document.getElementById("erase");
eraseButton.addEventListener("click", () => {
  changeHoverColor("#ffffff");
});

/** Reset grid and change its size */
var resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function () {
  var newSize = prompt("Change the grid size", "16");
  changeSize(newSize);
  Array.from(document.querySelectorAll(".childDiv")).forEach((item) => {
    item.style.backgroundColor = "#ffffff";
  });
  colorPicker.value = "#000000";
});
