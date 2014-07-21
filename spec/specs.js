describe("Tamagotchi", function() {
  describe("initialize", function(name, imageNumber) {
    it("sets the name and a few other properties", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("Pet Name",0);
      myPet.image.should.equal(0);
      myPet.name.should.equal("Pet Name");
      myPet.fedLevel.should.equal(10);
      myPet.happinessLevel.should.equal(10);
      myPet.restedLevel.should.equal(10);
      myPet.healthLevel.should.equal(30);
    });
  });

  /* describe("timePasses", function() {
    it("decreases the amount of food the Tamogatchi has left by 1", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("lil dragon");
      myPet.timePasses();
      myPet.foodLevel.should.equal(9);
    });
  });

  describe("isAlive", function() {
    it("is alive if the food level is above 0", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.isAlive().should.equal(true);
    });

    it("is dead if the food level is 0", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.foodLevel = 0;
      myPet.isAlive().should.equal(false);
    });
  }); */
});
