let array = [
  "lightyellow",
  "purple",
  "gray",
  "lightblue",
  "lavender",
  "lightgray",
  "lightpink",
  "lightcoral",
  "lightcyan",
  "lightgoldenrodyellow",
  "lightseagreen",
  "lightsalmon",
  "lightsteelblue",
];
let index = 0;
function changecolor() {
  document.body.style.backgroundColor = array[index];
  index++;
  if (index >= array.length) {
    index = 0;
  }
}
