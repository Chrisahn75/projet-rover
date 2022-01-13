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
    }; 
};

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
};

console.log (turnLeft(rover));
console.log(turnRight(rover));

// function moveForward (rover){
   
//     switch (rover.direction) {
//         case "N" : 
//             if (rover.y === 0) {
//                 return console.log ("You can't move forward");
//               } 
//             //   else {rover.y = rover.y--}
//             break;
//         case  "E" :
//             if (rover.x === grid.length-1){ // on va tester avec grid[0].length -1
//                 console.log ("You can't move forward");            
//             } 
//             // else {rover.x = rover.x++};
//             break;             
//         case "S" : 
//             if (rover.y === grid.length-1){ // grid[0]
//                 console.log ("You can't move forward")
//             } 
//             //else {rover.y = rover.y--}
//             break;
//         case "W" : 
//         if (rover.x === 0){
//             console.log ("You can't move forward");
//         }
//         // else {rover.x = rover.x--}
//         break;
//     };       

// };

// console.log (moveForward (rover));

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

