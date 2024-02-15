document.addEventListener("DOMContentLoaded", function () {
  //Data from html file
  const inputText = document.getElementById("inputText");
  const fontSelect = document.getElementById("font");
  const fontSizeSelect = document.getElementById("fontSize");
  const fontColorSelect = document.getElementById("fontColor");
  const addTextButton = document.getElementById("addTextButton");
  const undoButton = document.getElementById("undoButton");
  const redoButton = document.getElementById("redoButton");

  let prevText = [];
  let currentIndex = -1;

  fontSelect.addEventListener("change", function () {
    inputText.style.fontFamily = this.value;
  });

  fontSizeSelect.addEventListener("change", function () {
    inputText.style.fontSize = this.value + "px";
  });

  fontColorSelect.addEventListener("change", function () {
    inputText.style.color = this.value;
  });

  addTextButton.addEventListener("click", function (event) {
    event.preventDefault();
    inputText.value = "";
  });
  undoButton.add
});
