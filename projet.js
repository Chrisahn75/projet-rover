// PROJET ROVER

// 

const grid = [
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];

//this dans une classe ou fonction pour faire référence à un élement de ta fonc

let rover= {
    direction: "N",
}
console.log(rover)

console.table(grid)

function turnLeft (rover){
    switch (rover.direction) {
        case "N" : 
        rover.direction = "W";
        break;
        case  "W" : 
        rover.direction = "S";
        break;
        case "S" : 
        rover.direction = "E";
        break;
        case "E" : 
        rover.direction = "N";
        break;        
    } 
}

turnLeft()

function turnRight (rover){
    switch (rover.direction) {
        case "N" : 
        rover.direction = "E";
        break;
        case  "E" : 
        rover.direction = "S";
        break;
        case "S" : 
        rover.direction ="W";
        break;
        case "W" : 
        rover.direction ="N";
        break;        
    } 
}

turnRight ()

