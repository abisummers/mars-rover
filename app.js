rover = {
  direction: "N",
  X: 0,
  Y: 0,
  travelLog: [[0, 0]]
};

function turnLeft(rover) {
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      console.log("the rover is facing west");
      break;

    case "E":
      rover.direction = "N";
      console.log("the rover is facing north");
      break;

    case "S":
      rover.direction = "E";
      console.log("the rover is facing east");
      break;

    case "W":
      rover.direction = "S";
      console.log("the rover is facing south");
      break;
  }
}

function turnRight(rover) {
  console.log("turnRight was called!");

  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      console.log("the rover is facing east");
      break;

    case "E":
      rover.direction = "S";
      console.log("the rover is facing south");
      break;

    case "S":
      rover.direction = "W";
      console.log("the rover is facing west");
      break;

    case "W":
      rover.direction = "N";
      console.log("the rover is facing north");
      break;
  }
}

function moveForward(rover) {
  console.log("moveForward was called");

  if (rover.direction === "N" && rover.Y > 0) {
    rover.Y = rover.Y - 1;
  } else if (rover.direction === "S" && rover.Y < 10) {
    rover.Y = rover.Y + 1;
  } else if (rover.direction === "E" && rover.X < 10) {
    rover.X = rover.X + 1;
  } else if (rover.direction === "W" && rover.X > 0) {
    rover.X = rover.X - 1;
  } else {
    throw new Error("the rover is off the grid at " + [rover.X, rover.Y]);
  }
}

function moveBackwards(rover) {
  console.log("moveBackwards was called");

  if (rover.direction === "S" && rover.Y > 0) {
    rover.Y = rover.Y - 1;
  } else if (rover.direction === "N" && rover.Y < 10) {
    rover.Y = rover.Y + 1;
  } else if (rover.direction === "W" && rover.X < 10) {
    rover.X = rover.X + 1;
  } else if (rover.direction === "E" && rover.X > 0) {
    rover.X = rover.X - 1;
  } else {
    throw new Error("the rover is off the grid at " + [rover.X, rover.Y]);
  }
}

function roverCommands(rover, directions) {
  var commands = directions.split("");
  commands.forEach(command => {
    if (command === "f") {
      moveForward(rover);
    } else if (command === "b") {
      moveBackwards(rover);
    } else if (command === "l") {
      turnLeft(rover);
    } else if (command === "r") {
      turnRight(rover);
    }
    rover.travelLog.push([rover.X, rover.Y]);
  });
  console.log(rover.travelLog);
}

roverCommands(rover, "lb");
console.log(rover, "lb");
