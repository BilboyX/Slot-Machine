'use strict';

function animateBackground(bgClass) {
  const bgImage = bgClass;
  bgImage.classList.remove("animate");
  void bgImage.offsetWidth;
  bgImage.classList.add("animate");
};
  
document.addEventListener('DOMContentLoaded', function() {
  var SlotOn = false;
  var slot1Images = ["images/slot1.png", "images/slot2.png", "images/slot3.png", "images/slot4.png", "images/slot5.png", "images/slot6.png"];
  var slot2Images = ["images/slot1.png", "images/slot2.png", "images/slot3.png", "images/slot4.png", "images/slot5.png", "images/slot6.png"];
  var slot3Images = ["images/slot1.png", "images/slot2.png", "images/slot3.png", "images/slot4.png", "images/slot5.png", "images/slot6.png"];
  var inspire = ["There is a very easy way to return from a casino with a small fortune; go there with a large one. - Jack Yelton", "Remember this. The house doesn’t beat the player. It just gives him the opportunity to beat himself – Nicholas Dandalos (professional gambler)", "Gambling. The sure way of getting something for nothing – Wilson Mizner (playwright)", "Gambling undermines the moral fiber of society – Gordon B. Hinkley (religious leader and author)", "The best throw of the dice is to throw them away - English Proverb", "There are two great pleasures in gambling; that of winning and that of losing. – French Proverb", "In a bet there is a fool and a thief  – Unknown", "It's hard to walk away from a winning streak, even harder to leave the table when you're on a losing one ― Cara Bertoia"]
  var requestAnimationFrame = 50; // milliseconds
  var slotsSpinning = 0;
  var slot1Index = 0;
  var slot2Index = 0;
  var slot3Index = 0;
var money = 10;
  var bet = 1;



  const moneyDisplay = document.getElementById("money-display");
moneyDisplay.textContent = money;

const betsizeInput = document.getElementById('betsize');
betsizeInput.addEventListener('input', () => {
  // code to execute when the input value changes
  if (SlotOn) {
    document.getElementById('betsize').value
  }
  if (document.getElementById('betsize').value > money) {
    document.getElementById('betsize').value = money
  }
  if (document.getElementById('betsize').value < 1) {
    document.getElementById('betsize').value = 1
  }
  if (document.getElementById('betsize').value === '') {
    document.getElementById('betsize').value = 1
  }
  bet = document.getElementById('betsize').value
});

  function Roll() {
    SlotOn = true;
    
    slotsSpinning = 3;
  
    money = money - bet
    moneyDisplay.textContent = money
    document.getElementById("win-display").textContent =''

    var handle = document.querySelector('.handle');
    handle.classList.add('handle-pull');
  
    setTimeout(function() {
      handle.classList.remove('handle-pull');
      SlotOn = false;
      handle.style.cursor = 'pointer';
    }, 2600);
  
    var slot1 = document.querySelector('.slot1');
    var slot2 = document.querySelector('.slot2');
    var slot3 = document.querySelector('.slot3');
  
    var slot1Probabilities = [0.01, 0.1, 0.4, 0.05, 0.1, 0.34];
    var slot2Probabilities = [0.001, 0.05, 0.399, 0.05, 0.1, 0.4];
    var slot3Probabilities = [0.0001, 0.01, 0.3399, 0.05, 0.1, 0.5];
    
    // start all three slots spinning simultaneously
    var spinPromise1 = spin(slot3, slot3Images, Math.floor(Math.random() * slot3Images.length), 2000, 3, slot3Probabilities);
    var spinPromise2 = spin(slot2, slot2Images, Math.floor(Math.random() * slot2Images.length), 2300, 2, slot2Probabilities);
    var spinPromise3 = spin(slot1, slot1Images, Math.floor(Math.random() * slot1Images.length), 2600, 1, slot1Probabilities);

    // wait for all three slots to stop spinning in the correct order
    Promise.all([spinPromise1, spinPromise2, spinPromise3])
      .then(() => {
        slot1Index = slot1.style.backgroundImage;
        slot2Index = slot2.style.backgroundImage;
        slot3Index = slot3.style.backgroundImage;
        stopSpinning();
      });
  }

  function stopSpinning() {
    slotsSpinning--;
 console.log(slot1Index, slot2Index, slot3Index)
    
        //If 1, 2 or 3 7's
        if (slot1Index === `url("images/slot1.png")` || slot2Index === `url("images/slot1.png")` || slot3Index === `url("images/slot1.png")`) {
          if (slot1Index === `url("images/slot1.png")` && slot2Index === `url("images/slot1.png")` || slot2Index === `url("images/slot1.png")` && slot3Index === `url("images/slot1.png")` || slot1Index === `url("images/slot1.png")` && slot3Index === `url("images/slot1.png")`) {
              if (slot1Index === `url("images/slot1.png")` && slot2Index === `url("images/slot1.png")` && slot3Index === `url("images/slot1.png")`) {
                bet = bet * 500
                money = bet + money
                document.getElementById("win-display").textContent = "You just won x500!!!"
                moneyDisplay.textContent = money
                bet = document.getElementById('betsize').value, animateBackground(document.querySelector(".bg-image"))
                return
              }
              else if (slot1Index === `url("images/slot1.png")` && slot2Index === `url("images/slot1.png")` || slot2Index === `url("images/slot1.png")` && slot3Index === `url("images/slot1.png")` || slot1Index === `url("images/slot1.png")` && slot3Index === `url("images/slot1.png")`)  
              bet = bet * 70
              money = bet + money
              document.getElementById("win-display").textContent = "You just won x70!!!"
              moneyDisplay.textContent = money
              bet = document.getElementById('betsize').value, animateBackground(document.querySelector(".bg-image"))
              return
          }
          else if (slot1Index === `url("images/slot1.png")` || slot2Index === `url("images/slot1.png")` || slot3Index === `url("images/slot1.png")`) 
          bet = bet * 2
          money = bet + money
          document.getElementById("win-display").textContent = "You just won x2!!!"
          moneyDisplay.textContent = money
          bet = document.getElementById('betsize').value, animateBackground(document.querySelector(".bg-image"))
          return
        }

        //If 3 Bars
        if (slot1Index === `url("images/slot2.png")` && slot2Index === `url("images/slot2.png")` && slot3Index === `url("images/slot2.png")`) {
          bet = bet * 80
          money = bet + money
          document.getElementById("win-display").textContent = "You just won x80!!!"
          moneyDisplay.textContent = money
          bet = document.getElementById('betsize').value, animateBackground(document.querySelector(".bg-image"))
          return
        }
        //If 2 Lemons and 1 Bar
        if (slot1Index === `url("images/slot3.png")` && slot2Index === `url("images/slot3.png")` && slot3Index === `url("images/slot2.png")` || slot1Index === `url("images/slot3.png")` && slot2Index === `url("images/slot2.png")` && slot3Index === `url("images/slot3.png")` || slot1Index === `url("images/slot2.png")` && slot2Index === `url("images/slot3.png")` && slot3Index === `url("images/slot3.png")`) {
          bet = bet * 8
          money = bet + money
          document.getElementById("win-display").textContent = "You just won x8!!!"
          moneyDisplay.textContent = money
          bet = document.getElementById('betsize').value, animateBackground(document.querySelector(".bg-image"))
          return
        }
        //If 3 Lemons
        if (slot1Index === `url("images/slot3.png")` && slot2Index === `url("images/slot3.png")` && slot3Index === `url("images/slot3.png")`) {
          bet = bet * 9
          money = bet + money
          document.getElementById("win-display").textContent = "You just won x9!!!"
          moneyDisplay.textContent = money
          bet = document.getElementById('betsize').value, animateBackground(document.querySelector(".bg-image"))
          return
        }
        //If 2 Watermelons 1 Bar
        if (slot1Index === `url("images/slot4.png")` && slot2Index === `url("images/slot4.png")` && slot3Index === `url("images/slot2.png")`|| slot1Index === `url("images/slot4.png")` && slot2Index === `url("images/slot2.png")` && slot3Index === `url("images/slot4.png")` || slot1Index === `url("images/slot2.png")` && slot2Index === `url("images/slot4.png")` && slot3Index === `url("images/slot4.png")`) {
          bet = bet * 150
          money = bet + money
          document.getElementById("win-display").textContent = "You just won x150!!!"
          moneyDisplay.textContent = money
          bet = document.getElementById('betsize').value, animateBackground(document.querySelector(".bg-image"))
          return
        }
        //If 3 Watermelons
        if (slot1Index === `url("images/slot4.png")` && slot2Index === `url("images/slot4.png")` && slot3Index === `url("images/slot4.png")`) {
          bet = bet * 200
          money = bet + money
          document.getElementById("win-display").textContent = "You just won x200!!!"
          moneyDisplay.textContent = money
          bet = document.getElementById('betsize').value, animateBackground(document.querySelector(".bg-image"))
          return
        }
        //If 2 Bells 1 Bar
        if (slot1Index === `url("images/slot5.png")` && slot2Index === `url("images/slot5.png")` && slot3Index === `url("images/slot2.png")`|| slot1Index === `url("images/slot5.png")` && slot2Index === `url("images/slot2.png")` && slot3Index === `url("images/slot5.png")` || slot1Index === `url("images/slot2.png")` && slot2Index === `url("images/slot5.png")` && slot3Index === `url("images/slot5.png")`) {
          bet = bet * 90
          money = bet + money
          document.getElementById("win-display").textContent = "You just won x90!!!"
          moneyDisplay.textContent = money
          bet = document.getElementById('betsize').value, animateBackground(document.querySelector(".bg-image"))
          return
        }
        //If 3 Bells
        if (slot1Index === `url("images/slot5.png")` && slot2Index === `url("images/slot5.png")` && slot3Index === `url("images/slot5.png")`) {
          bet = bet * 100
          money = bet + money
          document.getElementById("win-display").textContent = "You just won x100!!!"
          moneyDisplay.textContent = money
          bet = document.getElementById('betsize').value, animateBackground(document.querySelector(".bg-image"))
          return
        }
        //If 2 Cherries 1 Bar
        if (slot1Index === `url("images/slot6.png")` && slot2Index === `url("images/slot6.png")` && slot3Index === `url("images/slot2.png")`|| slot1Index === `url("images/slot6.png")` && slot2Index === `url("images/slot2.png")` && slot3Index === `url("images/slot6.png")` || slot1Index === `url("images/slot2.png")` && slot2Index === `url("images/slot6.png")` && slot3Index === `url("images/slot6.png")`) {
          bet = bet * 4
          money = bet + money
          document.getElementById("win-display").textContent = "You just won x4!!!"
          moneyDisplay.textContent = money
          bet = document.getElementById('betsize').value, animateBackground(document.querySelector(".bg-image"))
          return
        }
         //If 3 Cherries
         if (slot1Index === `url("images/slot6.png")` && slot2Index === `url("images/slot6.png")` && slot3Index === `url("images/slot6.png")`) {
          bet = bet * 5
          money = bet + money
          document.getElementById("win-display").textContent = "You just won x5!!!"
          moneyDisplay.textContent = money
          bet = document.getElementById('betsize').value, animateBackground(document.querySelector(".bg-image"))
          return
        }

        document.getElementById("win-display").textContent = inspire[Math.floor(Math.random() * inspire.length)]
        animateBackground(document.querySelector(".bg-image1"))
  }



  var handle = document.querySelector('.handle'); 
  handle.addEventListener('mouseenter', function() {
    if (!SlotOn) {
      this.style.cursor = 'pointer';
    }
    else if (SlotOn) {
      this.style.cursor = 'not-allowed';
    }
  });

  handle.addEventListener('mouseleave', function() {
    this.style.cursor = 'auto';
  });

  handle.addEventListener('click', function() {
    if (!SlotOn) {
      Roll();
      this.style.cursor = 'not-allowed';
    }
  }); 

  function spin(slot, images, stopIndex, duration, order, probabilities) {
    return new Promise((resolve, reject) => {
      var currentImageIndex = Math.floor(Math.random() * images.length);
      var numImages = images.length;
      var startTime = new Date().getTime();
      var interval = setInterval(() => {
        var randomValue = Math.random();
        var cumulativeProbability = 0;
        var i;
        for (i = 0; i < probabilities.length; i++) {
          cumulativeProbability += probabilities[i];
          if (randomValue <= cumulativeProbability) {
            currentImageIndex = i;
            break;
          }
        }
        if (i == probabilities.length) {
          currentImageIndex = i - 1;
        }
  
        // calculate remaining time and stop index
        var currentTime = new Date().getTime();
        var elapsedTime = currentTime - startTime;
        var remainingTime = duration - elapsedTime;
        var remainingImages = numImages - currentImageIndex - 1;
        var stopImageIndex = (stopIndex + remainingImages) % numImages;
  
        // stop the spin if the remaining time is less than or equal to zero
        if (remainingTime <= 0) {
          clearInterval(interval);
  
          // if this is the last slot to stop spinning, resolve the promise
          if (order === 3) {
            setTimeout(() => {
              resolve();
            }, remainingTime);
          } else {
            resolve();
          }
        } else {
          // set the background image of the slot
          slot.style.backgroundImage = `url(${images[currentImageIndex]})`;
  
          // set the background position of the slot to shift the image downwards
          slot.style.backgroundPosition = `0 ${-currentImageIndex * slot.clientHeight}px`;
        }
      }, requestAnimationFrame);
    });
  }
});