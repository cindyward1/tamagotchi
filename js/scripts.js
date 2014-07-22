var Tamagotchi = {

  initialize: function (name, imageNumber, birthdate) {
    this.name = name;
    this.image = imageNumber;
    this.birthdate = birthdate;
    this.isSleeping = false;
    this.foodLevel = 10;
    this.happinessLevel = 10;
    this.restedLevel = 10;
    this.healthLevel = (this.foodLevel + this.happinessLevel + this.restedLevel) / 3; // calling calcHealthLevel doesn't work here
  },

  calcHealthLevel: function () {
    this.healthLevel = (this.foodLevel + this.happinessLevel + this.restedLevel) / 3;
  },

// Action functions - need buttons

  feed: function () {
    this.foodLevel++;
  },

  play: function () {
    this.happinessLevel++;
  },

  medicine: function (medicineDose) {
    this.healthLevel = this.healthLevel + medicineDose;
  },

  putToBed: function () {
    if (!this.isSleeping) {
      this.isSleeping = true;
    } else {
      alert("The Tamagotchi is already asleep!");
    };
  },

// State variable readers

  isAlive: function () {
    if ((this.healthLevel < 2) || (this.foodLevel === 0)) {
      return false;
    } else {
      return true;
    };
  },

// Warning functions

  restedLevelWarning: function () {
    var restedWarning = false;
      if (this.restedLevel < 4) {
        restedWarning = true;
        alert("Your Tamagotchi is very tired, you should put it to bed!");
      };
    return restedWarning;
  },

  foodLevelWarning: function () {
    var foodWarning = false;
      if (this.foodLevel < 4) {
        foodWarning = true;
        alert("Your Tamagotchi is very hungry, you should feed it!");
      };
    return foodWarning;
  },

  happinessLevelWarning: function () {
    var happinessWarning = false;
      if (this.happinessLevel < 4) {
        happinessWarning = true;
        alert("Your Tamagotchi is very unhappy, you should play with it!");
      };
    return happinessWarning;
  },

// Time passes

  timePasses: function () {
    if (this.isSleeping) {
      this.restedLevel++;
      this.happinessLevel--;
    } else { // is awake
      this.restedLevel--;
      this.happinessLevel--;
      this.foodLevel--;
    };
  }

}; // end Tamagotchi
