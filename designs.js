
function makeGrid() {

  const gridHeight = document.getElementById('inputHeight').value;
  const gridWidth = document.getElementById('inputWidth').value;
  const pixelCanvas = document.querySelector('pixelCanvas');

  pixelCanvas.innerHTML= "";

  for (let i = 0; i < gridHeight; i++){
    let row = pixelCanvas.insertRow(i);

  for (let j = 0, j< gridWidth; j++) {
    let cell = row.insertCell(j);

    cell.addEventListener('click', function(event){
      event.target.style.backgroundColor = document.getElementById('colorPicker').value;
    });
  }
  }
  }

  document.getElementById('sizePicker').addEventListener('submit', function(event){
    event.preventDefault();

  makeGrid();
});
