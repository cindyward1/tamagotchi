describe("Tamagotchi", function() {

  describe("initialize", function(name, imageNumber, birthdate) {
    it("sets the name and a few other properties", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("Pet Name",0,"7/20/2013");
      myPet.image.should.equal(0);
      myPet.name.should.equal("Pet Name");
      myPet.birthdate.should.equal("7/20/2013");
      myPet.foodLevel.should.equal(10);
      myPet.happinessLevel.should.equal(10);
      myPet.restedLevel.should.equal(10);
      myPet.healthLevel.should.equal(10);
      myPet.isSleeping.should.equal(false); // start out with Tamagotchi awake
    });
  });

  describe("calcHealthLevel", function ()  {
    it("sets the health level to the average of the food level, happiness level and rested level", function () {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("Pet Name", 0, "7/20/2014");
      myPet.calcHealthLevel().should.equal(10);
    });
  });

  describe("feed", function ()   {
    it("increases the amount of food the Tamagotchi has by 1", function () {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("Pet Name", 0, "7/20/2014");
      myPet.feed();
      myPet.foodLevel.should.equal(11);
    });
  });

  describe("play", function ()   {
    it("increases the happiness Level of the Tamagotchi by 1", function () {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("Pet Name", 0, "7/20/2014");
      myPet.play();
      myPet.happinessLevel.should.equal(11);
    });
  });

  describe("medicine", function ()   {
    it("increases the health level of the Tamagotchi by 1", function () {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("Pet Name", 0, "7/20/2014");
      myPet.medicine();
      myPet.healthLevel.should.equal(11);
    });
  });

  describe("putToBed", function () {
    it("changes the Tamagotchi from awake to sleeping", function () {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("Pet Name", 0, "7/20/2014");
      myPet.putToBed();
      myPet.isSleeping.should.equal(true);
    });

    it("gives a warning if the Tamagotchi is already asleep", function () {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("Pet Name", 0, "7/20/2014");
      myPet.isSleeping = true;
      myPet.putToBed();
      myPet.isSleeping.should.equal(true);
    });
  });

  describe("isAlive", function() {
    it("is alive if the food level is above 0 or the health level is above 2", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("Pet Name", 0, "7/20/2014");
      myPet.isAlive().should.equal(true);
    });

    it("is dead if the food level is 0", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("Pet Name", 0, "7/20/2014");
      myPet.foodLevel = 0;
      myPet.isAlive().should.equal(false);
    });

    it("is dead if the health level is less than 2", function () {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("Pet Name", 0, "7/20/2014");
      myPet.healthLevel = 1;
      myPet.isAlive().should.equal(false);
    });
  });

  describe("restedLevelWarning", function () {
    it("should return a warning when rested is less than 4", function () {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("Pet Name", 0, "7/20/2014");
      myPet.restedLevel = 3;
      myPet.restedLevelWarning().should.equal(true);
    });
  });

  describe("foodLevelWarning", function () {
    it("should return a warning when rested is less than 4", function () {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("Pet Name", 0, "7/20/2014");
      myPet.foodLevel = 3;
      myPet.foodLevelWarning().should.equal(true);
    });
  });

  describe("happinessLevelWarning", function () {
    it("should return a warning when rested is less than 4", function () {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("Pet Name", 0, "7/20/2014");
      myPet.happinessLevel = 3;
      myPet.happinessLevelWarning().should.equal(true);
    });
  });

  describe("healthLevelWarning", function () {
    it("should return a warning when health is less than 6", function () {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("Pet Name", 0, "7/20/2014");
      myPet.healthLevel = 3;
      myPet.healthLevelWarning().should.equal(true);
    });
  });

  describe("timePasses", function(){
    it("should decrement the food, happiness, and rested levels if awake", function(){
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("Pet Name", 0, "7/20/2014");
      myPet.timePasses();
      myPet.foodLevel.should.equal(9);
      myPet.happinessLevel.should.equal(9);
      myPet.restedLevel.should.equal(9);
    });

    it("should increment the rested level, decrement the happiness level, and do nothing to the food level if sleeping", function(){
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("Pet Name", 0, "7/20/2014");
      myPet.isSleeping = true;
      myPet.timePasses();
      myPet.foodLevel.should.equal(10);
      myPet.happinessLevel.should.equal(9);
      myPet.restedLevel.should.equal(11);
    });
  });

});
