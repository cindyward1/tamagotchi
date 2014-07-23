var Tamagotchi = {

  initialize: function (name, imageNumber, birthdate) {
    this.name = name;
    this.image = imageNumber;
    this.birthdate = birthdate;
    this.isSleeping = false;
    this.foodLevel = 10;
    this.happinessLevel = 10;
    this.restedLevel = 10;
    this.healthLevel = this.calcHealthLevel();
  },

  calcHealthLevel: function () {
    return ((this.foodLevel + this.happinessLevel + this.restedLevel) / 3);
  },

// Action functions - need buttons

  feed: function () {
    this.foodLevel++;
  },

  play: function () {
    this.happinessLevel++;
  },

  medicine: function () {
    this.healthLevel++;
  },

  putToBed: function () {
    if (!this.isSleeping) {
      this.isSleeping = true;
    } else {
 //     alert("The Tamagotchi is already asleep!");
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
 /*       alert("Your Tamagotchi is very tired, you should put it to bed!");*/
      };
    return restedWarning;
  },

  foodLevelWarning: function () {
    var foodWarning = false;
      if (this.foodLevel < 4) {
        foodWarning = true;
       /* alert("Your Tamagotchi is very hungry, you should feed it!");*/
      };
    return foodWarning;
  },

  happinessLevelWarning: function () {
    var happinessWarning = false;
      if (this.happinessLevel < 4) {
        happinessWarning = true;
       /* alert("Your Tamagotchi is very unhappy, you should play with it!");*/
      };
    return happinessWarning;
  },

  healthLevelWarning: function () {
    var healthWarning = false;
      if (this.healthLevel < 4) {
        healthWarning = true;
       /* alert("Your Tamagotchi is very unhappy, you should play with it!");*/
      };
    return healthWarning;
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

$(document).ready (function () {

  var buttonSelected = false;
  var numberImage = 0;

  if (!buttonSelected) {
    $("button#button0").click (function () {
      $(".show-message").html("<img class='photo-width' src='./img/char0.png' alt='Picture of first character'>");
    buttonSelected = true;
    numberImage = 0;
    });
  };

  if (!buttonSelected) {
    $("button#button1").click (function () {
      $(".show-message").html("<img class='photo-width' src='./img/char1.png' alt='Picture of first character'>");
    buttonSelected = true;
    numberImage = 1;
    });
  };

  if (!buttonSelected) {
    $("button#button2").click (function () {
      $(".show-message").html("<img class='photo-width' src='./img/char2.png' alt='Picture of first character'>");
    buttonSelected = true;
    numberImage = 2;
    });
  };

  if (!buttonSelected) {
    $("button#button3").click (function () {
      $(".show-message").html("<img class='photo-width' src='./img/char3.png' alt='Picture of first character'>");
    buttonSelected = true;
    numberImage = 3;
    });
  };

  if (!buttonSelected) {
    $("button#button4").click (function () {
      $(".show-message").html("<img class='photo-width' src='./img/char4.png' alt='Picture of first character'>");
    buttonSelected = true;
    numberImage = 4;
    });
  };

  if (!buttonSelected) {
    $("button#button5").click (function () {
      $(".show-message").html("<img class='photo-width' src='./img/char5.png' alt='Picture of first character'>");
    buttonSelected = true;
    numberImage = 5;
    });
  };

  if (!buttonSelected) {
    $("button#button6").click (function () {
      $(".show-message").html("<img class='photo-width' src='./img/char6.png' alt='Picture of first character'>");
    buttonSelected = true;
    numberImage = 6;
    });
  };

  if (!buttonSelected) {
   $("button#button7").click (function () {
      $(".show-message").html("<img class='photo-width' src='./img/char7.png' alt='Picture of first character'>");
    buttonSelected = true;
    numberImage = 7;
    });
  };

  if (!buttonSelected) {
    $("button#button8").click (function () {
      $(".show-message").html("<img class='photo-width' src='./img/char8.png' alt='Picture of first character'>");
    buttonSelected = true;
    numberImage = 8;
    });
  };

  $("form#form-to-disappear").submit(function(event){
    event.preventDefault();

    var inputtedName = $("input#tamagotchi-name").val();
    var inputtedBirthday = $("input#tamagotchi-birthday").val();

    $(".tamagotchi-name").text(inputtedName);

    var formattedDate = new Date(inputtedBirthday);
    var displayDay = formattedDate.getDate();
    displayDay++;
    var displayMonth =  formattedDate.getMonth();
    displayMonth++;  // JavaScript months are 0-11
    var displayYear = formattedDate.getFullYear();
    var dateToDisplay = displayMonth + "/" + displayDay + "/" + displayYear;

    $(".tamagotchi-birthday").text(dateToDisplay);

    $("input#tamagotchi-name").val("");
    $("input#tamagotchi-birthday").val("");

    $("#form-to-disappear").hide();
    $("#show-name-birthday").show();

    var myTamagotchi = Object.create(Tamagotchi);
    myTamagotchi.initialize(inputtedName, numberImage, dateToDisplay);

    $(".food-meter").replaceWith("<meter value=" + myTamagotchi.foodLevel + " min='-1' low='4' high='8' optimum='10' max='15'></meter>");
    $(".happiness-meter").replaceWith("<meter value=" + myTamagotchi.happinessLevel + " min='-1' low='4' high='8' optimum='10' max='15'></meter>");
    $(".rested-meter").replaceWith("<meter value=" + myTamagotchi.restedLevel + " min='-1' low='4' high='8' optimum='10' max='15'></meter>");
    $(".health-meter").replaceWith("<meter value=" + myTamagotchi.healthLevel + " min='-1' low='6' high='8' optimum='10' max='15'></meter>");

    $("#meter-area").show();

  });

});
