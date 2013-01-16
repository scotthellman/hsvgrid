function init() {
	initGrid();
	return setInterval(update, 10);
}

function update(){
	alterGrid(360*Math.random(),Math.random(),Math.random(),Math.floor(40*Math.random()),Math.floor(40*Math.random()));
	drawGrid();
}
