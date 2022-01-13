// PROJET ROVER

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


const rover= {
    direction: "N",
    x: 0,
    y: 0,
}

// console.table(grid)

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
turnLeft("S")

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

function moveForward (rover){
   
    switch (rover.direction) {
        case "N" : 
            if (rover.y === 0){
                console.log ("You can't move forward");
              } else {rover.y = rover.y--}
            break;
        case  "E" :
            if (rover.x = grid[0].length-1){
                console.log ("You can't move forward");            
            } else {rover.x = rover.x++};
            break;             
        case "S" : 
            if (rover.y === grid[0].length-1){
                console.log ("You can't move forward")
            } else {rover.y = rover.y--}
            break;
        case "W" : 
        if (rover.x === 0){
            console.log ("You can't move forward");
        }else {rover.x = rover.x--}
        break;
    };       

};

moveForward ("E");

