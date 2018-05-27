var socket = io.connect('http://localhost:3000');

var side = 30;
var n = 20;
function setup() {
    frameRate(1);
    createCanvas(n * side, n * side);
    background('#acacac');

}
col = '#ffffff';
socket.on('matrix', gcel);
socket.on('weather', function(weather){
    if(weather == 'spring'){
        col = "#d4f2b3";
    }
     if(weather == 'summer'){
        col = "#f1dcb2";
    }
     if(weather == 'autumn'){
        col = "#dbbfb6";
    }
     if(weather == 'winter'){
        col = "#d5f2f2";
    }
});

function gcel(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == 1) {
                    fill("green");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 2) {
                    fill("yellow");
                    rect(x * side, y * side, side, side);
                }

                else if (matrix[y][x] == 3) {
                    fill("red");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 4) {
                    fill("black");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 0) {
                    fill(col);
                    rect(x * side, y * side, side, side);
                }
               
            }
        }
    }
}


























