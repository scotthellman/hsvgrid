function init() {
    var canvas = document.getElementById("gradient");
    canvas.width = 800;
    canvas.height = 800;
	initGrid(canvas,20);
	return setInterval(update, 10);
}

function update(){
	alterGrid(360*Math.random(),Math.random(),Math.random(),Math.floor(40*Math.random()),Math.floor(40*Math.random()));
	drawGridToCanvas();
}
