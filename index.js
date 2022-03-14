var canvas = document.getElementById("canvas");
var canvas_context = canvas.getContext("2d");
var canvas_buffer = canvas_context.getImageData(0, 0, canvas.width, canvas.height);
var canvas_pitch = canvas_buffer.width * 4;


//main loop
for (var x = -canvas.width/2; x < canvas.width/2; x++) {
  for (var y = -canvas.height/2; y < canvas.height/2; y++) {
    var direction = CanvasToViewport([x, y])
    var color = TraceRay(camera_position, direction, 1, Infinity);
    PutPixel(x, y, color);
  }
}










// Helper function to print to the screen. 
function print(line) {
  const appDiv = document.getElementById('app');
  const div = document.createElement('div');
  div.innerHTML = line;
  appDiv.appendChild(div)
}