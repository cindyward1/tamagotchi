tamagotchi
====================

##README for tamagotchi

* Authors: Cindy Ward <cindyward@yahoo.com> and Peggy Condon <peggyc3@gmail.com>
* Date created: July 20, 2014
* Last modification date: July 26, 2014 (with the exception of editing this README file on September 3, 2014)
* Created for:  Epicodus, Summer 2014 session

##Included; written by authors:
* ./README.md (this file)
* ./LICENSE.md (using the "Unlicense" template)
* ./index.html
* ./css/styles.css
* ./img/bed-button.jpg (downloaded from Web)
* ./img/bird-asleep.png (downloaded from Web)
* ./img/bird-awake.png (downloaded from Web)
* ./img/char[0-8].png (downloaded from Web)
* ./img/food-button.png (downloaded from Web)
* ./img/medicine-button.png (downloaded from Web)
* ./img/play-button.png (downloaded from Web)
* ./img/question-mark.jpg (downloaded from Web)
* ./js/scripts.js
* ./spec/spec-runner.html
* ./spec/specs.js

##Included; written by others but required for proper execution of application:
* ./css/bootstrap.js
* ./css/bootstrap.css
* ./js/jsquery-1.11.1.js
* ./spec/chai.js
* ./spec/mocha.js
* ./spec/mocha.css

## Requirements for execution:
* [git clone](http://github.com/) the image available at http://github.com/cindyward1/tamagotchi, which will create a tamagotchi directory with css, img, js and spec subdirectories.
* To run the application, start the Chrome browser and enter 'file:///(clone location)/tamagotchi/index.html' in the address area. On an iMac, you can also use Finder to find the (clone location)/tamagotchi/index.html file and double-click on it to start the app in the default browser.
* Please note that this repository has only been tested with [Google Chrome browser](http://www.google.com/intl/en/chrome/browser) version 36.0.1985.125 on an iMac running [Apple](http://www.apple.com) OS X version 10.9.4 (Mavericks). Execution on any other computing platform, browser or operating system is at the user's risk.

##Description:
This Web application allows the user to choose a Tamagotchi character from an array, displays the character's image, and displays buttons which the user can press to feed the Tamagotchi, play with it, put it to sleep, and give it medicine. The bird indicates whether the Tamagotchi is awake or asleep at any given time. If the Tamagotchi gets too hungry or unhealthy, it will die, the game is lost, the bird is set to be asleep, and the displayed Tamagotchi character's image is turned upside down. There is a difficulty slider (input type=range) that sets the difficulty level from 100 (very hard) to 1000 (very easy).
