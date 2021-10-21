/** Make a parent div */
var parentDiv = document.createElement("div");
parentDiv.className = "parentDiv";
parentDiv.id = "parentDiv";
parentDiv.style.border = "4px solid black";
parentDiv.style.width = "50%";
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

createGrid(defaultSize);

// var childDivArray = Array.from(document.querySelectorAll(".childDiv"));

// childDivArray.forEach((item) => {
//   item.addEventListener("mouseover", function () {
//     item.style.backgroundColor = hoverColor;
//   });
// });

/** change hover color */
function changeHoverColor(color) {
  hoverColor = color;
}

/** change grid size */
function changeSize(newSize) {
  createGrid(newSize);
}

var changeBlueButton = document.getElementById("hoverBlue");
changeBlueButton.addEventListener("click", () => {
  changeHoverColor("blue");
});

var changeBlackButton = document.getElementById("hoverBlack");
changeBlackButton.addEventListener("click", () => {
  changeHoverColor("black");
});

var changeRGB = document.getElementById("RGB");
changeRGB.addEventListener("click", () => {
  changeHoverColor(getRandomColor());
});

/** Reset grid and change its size */
var resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function () {
  Array.from(document.querySelectorAll(".childDiv")).forEach((item) => {
    item.style.backgroundColor = "white";
  });
  var newSize = prompt("Change the grid size", "16");
  changeSize(newSize);
});

/** Start erasing with hover color as white*/
var eraseButton = document.getElementById("erase");
eraseButton.addEventListener("click", () => {
  changeHoverColor("white");
});

function getRandomColor() {
  var code = "0123456789abcdef";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += code[Math.floor(Math.random() * 16)];
  }
  return color;
}
