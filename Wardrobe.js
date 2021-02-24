// Wardrobe class
// Simple class created for exercise

class Wardrobe {
  constructor(name, color, filled, doorStatus1, doorStatus2, doorStatus3) {
    this.name = name;
    this.color = color;
    this.filled = filled;
    this.doorStatus = {
      door1: doorStatus1,
      door2: doorStatus2,
      door3: doorStatus3,
    };
  }
  newDoorStatus(statusDoor1, statusDoor2, statusDoor3) {
    this.doorStatus.door1 = statusDoor1;
    this.doorStatus.door2 = statusDoor2;
    this.doorStatus.door3 = statusDoor3;
  }
}

export default Wardrobe;
