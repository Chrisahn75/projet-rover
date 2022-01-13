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
    travelLog: [],
}

// console.table(grid)

// FUNCTION TURNLEFT

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
    }; 

    grid[rover.y][rover.x] = rover.direction;
};

// FUNCTION TURNRIGHT

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
    };

    grid[rover.y][rover.x] = rover.direction;
};

// FUNCTION MOVEFORWARD

function moveForward (rover){
   
    switch (rover.direction) {
        case "N" : 
            if (rover.y === 0) {
                return console.log ("You can't move forward");
              } 
              else {
                    console.log("You can move forward");
                    // console.log(`Your current direction is ${rover.direction}`);
                    rover.y = rover.y--}
            break;
        case  "E" :
            if (rover.x === grid.length-1){ // on va tester avec grid[0].length -1
                console.log ("You can't move forward");            
            } 
            else {
                    console.log("You can move forward");
                    // console.log(`Your current direction is ${rover.direction}`);          
                    rover.x = rover.x++};
            break;             
        case "S" : 
            if (rover.y === grid.length-1){ // grid[0]
                console.log ("You can't move forward")
            } 
            else {
                console.log("You can move forward");
                // console.log(`Your current direction is ${rover.direction}`);
                rover.y = rover.y--}
            break;
        case "W" : 
        if (rover.x === 0){            
            console.log ("You can't move forward");
        }
        else {
            console.log("You can move forward");
            // console.log(`Your current direction is ${rover.direction}`);
            rover.x = rover.x--}
        break;
    };
    
    grid[rover.y][rover.x] = rover.direction;

};

// FUNCTION MOVEBACKWARD

function moveBackward (rover){
switch (rover.direction) {
    case "N" :
        if (rover.y === grid.length-1) {
            return console.log ("You can't move backward");
            }
            else {
                console.log("You can move backward");
                // console.log(`Your current direction is ${rover.direction}`);
                rover.y = rover.y++}
        break;
    case  "E" :
        if (rover.x === 0){ // on va tester avec grid[0].length -1
            console.log ("You can't move backward");
        }
        else {
                console.log("You can move backrward");
                // console.log(`Your current direction is ${rover.direction}`);
                rover.x = rover.x--};
        break;
    case "S" :
        if (rover.y === 0){ // grid[0]
            console.log ("You can't move backward")
        }
        else {
            console.log("You can move backward");
            // console.log(`Your current direction is ${rover.direction}`);
            rover.y = rover.y++}
        break;
    case "W" :
    if (rover.x === grid.length-1){
        console.log ("You can't move backward");
    }
    else {
        console.log("You can move backward");
        // console.log(`Your current direction is ${rover.direction}`);
        rover.x = rover.x++}
    break;
};
grid[rover.y][rover.x]=rover.direction;
};

// Autre façon

// function moveForward(rover) {
//     if ((rover.direction === "N" && rover.y <= 0) ||

//         (rover.direction === "E" && rover.x >= 9) ||
//         (rover.direction === "S" && rover.y >= 9) ||
//         (rover.direction === "W" && rover.x <= 0)) {

//         return console.log("* Cannot move in that direction *");

//     } else if (rover.direction === "N" && rover.y <= 9) {
//     rover.x -= 1;

//     } else if (rover.direction === "E" && rover.x < 9) {
//     rover.y += 1;      

//     } else if (rover.direction === "S" && rover.y  < 9) {
//     rover.x += 1;

//     } else if (rover.direction === "W" && rover.x <= 9) {
//     rover.y -= 1;      
//     };

//     console.log(`* Moving forward *`);
//     console.log(`* Current rover direction is ${rover.direction} *`);
// };

// turnRight(rover);
// turnRight(rover);
// moveForward(rover);


// FUNCTION PILOTROVER + TRAVELLOG

function pilotRover(str){
    for (let i = 0; i < str.length; i++) {
        switch (str[i]){
            case "l":
                turnLeft(rover);
                rover.travelLog.push("You have turned left")
                // console.log("You have turned left");
                break;
            case "r":
                turnRight(rover);
                rover.travelLog.push("You have turned right")
                // console.log("You have turned right");
                break;
            case "f":
                moveForward(rover);
                rover.travelLog.push("You have moved forward")
                // console.log("You have moved forward");
                break;
            case "b":
                moveBackward(rover);
                rover.travelLog.push("You have moved backward")
                // console.log("You have moved forward");
                break;
            default :
                console.log("You cannot execute that command");
        }
    }
    rover.x = 6;
    rover.y = 4;   
    grid[rover.y][rover.x] = rover.direction;
    console.log(`Your Rover's history is: ${rover.travelLog}`);
    console.log(`Your current position is ${rover.y}/${rover.x} and your current direction is ${rover.direction}`);  
    
};

pilotRover("r");
pilotRover("r");
pilotRover("f");
console.table(grid);

// PROMPT

// const prompt = require("prompt");

// const properties = [
//     {
//         name: "move",
//         description: "What's rover's next move ?",
//         type: "string",
//         validator: /^[lfrb]+$/,
//         warning: "Invalid output, only use 'l' for left, 'r' for right, 'f' for forward and 'b' for backward"
//     }
// ];
