'use strict';

let saved = localStorage.getItem("saved") ? JSON.parse(localStorage.getItem("saved")) : {
  debt: 0,
  money: 10,
  bet: 1,
  betwas: 1 ,
  loanNum: 0,
  cA: 1,
  start: true,
  mode: 0,
};

if (saved.start === true) {
  setTimeout(() => {
  document.querySelector(".cont").classList.add("animate");
  }, 4000);  
  setTimeout(() => {
    document.querySelector("html").classList.add("animate1");
    if (saved.cA === 1) {Opening.loop = true,
    Opening.play().then(()=>{
  }
  ).catch(error=>{
    console.log('sad );')
  }
  );
}
    }, 5000);
    setTimeout(() => {
      document.querySelector("html").classList.add("animate2");
      }, 6000);
}

function animateBackground3() { 
  document.querySelector(".dark").classList.remove("animate");
  void document.querySelector(".dark").offsetWidth;
  document.querySelector(".dark").classList.add("animate");
  setTimeout(() => {
    document.querySelector(".bg-image3").classList.remove("animate");
  void document.querySelector(".bg-image3").offsetWidth;
  document.querySelector(".bg-image3").classList.add("animate");
  document.querySelector(".shh").classList.remove("animate");
  void document.querySelector(".shh").offsetWidth;
  document.querySelector(".shh").classList.add("animate");
  }, 2000);
  setTimeout(() => {
    cut.play()
  }, 9000);
  setTimeout(() => {
    document.querySelector(".bg-image3").classList.remove("animate");
  document.querySelector(".shh").classList.remove("animate");
  document.querySelector("html").classList.add("animate");
  }, 10000);
  setTimeout(() => {
    saved.money = 10 
    saved.debt = 0
    saved.bet = 1 
    saved.betwas = 1 
    saved.loanNum = 0
    saved.first = 1
    saved.start = true
    saved.mode = 0
    localStorage.setItem("saved", JSON.stringify(saved));
    location.reload(true)
  }, 12000);
};

var Crank = new Audio('audio/Crank.mp3');
var Lose = new Audio('audio/Lose.mp3');
var Defeat = new Audio('audio/Defeat!.mp3');
var Win = new Audio('audio/Win!.mp3');
var SlotsRolling = new Audio('audio/Slots Rolling.mp3');
var debtM = new Audio('audio/Debt.mp3');
var cut = new Audio('audio/cut.mp3');
var Opening = new Audio('audio/Opening.mp3');
var Selected = new Audio('audio/Selected.mp3');
Defeat.volume = 0.3
SlotsRolling.volume = 0.1

function rollAudio() { 
  if (saved.cA === 1) {
  Win.pause()
  Defeat.pause()
  Lose.pause()
  Crank.loop = false,
  Crank.play()
  SlotsRolling.currentTime = 0,
  SlotsRolling.loop = false,
  SlotsRolling.play()
  }
}

function animateBackground1() {
  document.querySelector(".bg-image2").classList.remove("animate1");
  void document.querySelector(".bg-image2").offsetWidth;
  document.querySelector(".bg-image2").classList.add("animate1");
  document.querySelector("#debt-button").classList.remove("animate1");
  void document.querySelector("#debt-button").offsetWidth;
  document.querySelector("#debt-button").classList.add("animate1");
  document.querySelector(".container").classList.remove("animate1");
  void  document.querySelector(".container").offsetWidth;
  document.querySelector(".container").classList.add("animate1");
  document.getElementById("win-display").textContent = "Loan Shark: Good"
  document.querySelector(".top-right").classList.remove("animate1");
  void  document.querySelector(".top-right").offsetWidth;
  document.querySelector(".top-right1").classList.remove("animate1");
  void  document.querySelector(".top-right1").offsetWidth;
  saved.debt = saved.debt + 1000
  saved.money = 1000
  document.getElementById("money-display").textContent = saved.money
  document.getElementById("debt-display").textContent = formatWhole(saved.debt)
  saved.bet = 1
  document.getElementById('betsize').value = 1
  localStorage.setItem("saved", JSON.stringify(saved));
};

function animateBackground(bgClass) {
  bgClass.classList.remove("animate");
  bgClass.classList.remove("animate1");
  void bgClass.offsetWidth;
  bgClass.classList.add("animate");
  if (bgClass === document.querySelector(".bg-image2")) {
  document.querySelector(".top-right1").classList.add("animate1");
  document.querySelector(".top-right").classList.add("animate1");}
};

function animateBackground2() { 
  document.querySelector("#debt-button").classList.remove("animate")
  document.querySelector("#debt-button").classList.remove("animate1");
  void document.querySelector("#debt-button").offsetWidth;
  document.querySelector("#debt-button").classList.add("animate");
};

function animateBackground4() {
  document.querySelector(".container").classList.remove("animate1");
  document.querySelector(".container").classList.remove("animate");
  void  document.querySelector(".container").offsetWidth;
  document.querySelector(".container").classList.add("animate");
};

document.addEventListener('DOMContentLoaded', function() {
  
  if (saved.start === false) {
    document.querySelector(".starttext").classList.add("animate");
    document.querySelector(".start").classList.add("animate");
    document.querySelector(".cont").classList.add("animate1");
  }

  
  var SlotOn = false;
  var slot1Images = ["images/slot1.png", "images/slot2.png", "images/slot3.png", "images/slot4.png", "images/slot5.png", "images/slot6.png"];
  var slot2Images = ["images/slot1.png", "images/slot2.png", "images/slot3.png", "images/slot4.png", "images/slot5.png", "images/slot6.png"];
  var slot3Images = ["images/slot1.png", "images/slot2.png", "images/slot3.png", "images/slot4.png", "images/slot5.png", "images/slot6.png"];
 
  var inspire = ["There is a very easy way to return from a casino with a small fortune; go there with a large one. - Jack Yelton", 
  "Remember this. The house doesn't beat the player. It just gives him the opportunity to beat himself - Nicholas Dandalos (professional gambler)", 
  "Gambling. The sure way of getting something for nothing - Wilson Mizner (playwright)", 
  "Gambling undermines the moral fiber of society - Gordon B. Hinkley (religious leader and author)", 
  "The best throw of the dice is to throw them away - English Proverb", 
  "There are two great pleasures in gambling; that of winning and that of losing. - French Proverb", 
  "In a bet there is a fool and a thief - Unknown", 
  "It's hard to walk away from a winning streak, even harder to leave the table when you're on a losing one - Cara Bertoia (writer)",
  "A Gambler is nothing but a man who makes his living out of false hope - William Bolitho (South African journalist)",
  "There are many harsh leasons to be learned from the gambling experience, but the harshest one of all is the difference between having fun and being smart - Hunter S. Thompson (American journalist)",
  "Show me a gambler, I'll show you a loser - Mario Puzo (American author and screenwriter)",
  "The safe way to double your money is to fold it  once and put it in your pocket - Kin Hubbard (American cartoonist)",
  "Gambling is a disease of barbarians superficially civilized - William Ralph Inge (English author)",
  "The only sure thing about luck is that it will change - Bret Harte (American short story writer and poet)",
  "The only man who makes money following the races is the one who does it with a broom and shovel - Elbert Hubbard (American writer, publisher, artist, and philosopher)",
  "Hoping to recoup is what ruins the gambler - Irish proverb"
]
 
 
  var timeSync = 50; // milliseconds
  var slotsSpinning = 3;
  var slot1Index = 0;
  var slot2Index = 0;
  var slot3Index = 0;
    
  if (saved.cA === 0) {
    Crank.pause();
    Lose.pause();
    Defeat.pause();
    Win.pause();
    SlotsRolling.pause();
    debtM.pause();
    cut.pause();
    document.querySelector(".top-right1").classList.add("animate");
    void document.querySelector(".top-right").offsetWidth;
    void document.querySelector(".top-right1").offsetWidth;
    document.querySelector(".top-right").classList.add("animate");
  }
  
  const debtDisplay = document.getElementById("debt-display");
const moneyDisplay = document.getElementById("money-display");
  debtDisplay.textContent = formatWhole(saved.debt);
moneyDisplay.textContent = saved.money;

document.getElementById("debt-display").textContent = saved.debt
document.getElementById("money-display").textContent = saved.money
document.getElementById('betsize').value = saved.bet

const betsizeInput = document.getElementById('betsize');
betsizeInput.addEventListener('input', () => {
  // code to execute when the input value changes
  if (SlotOn) {
    document.getElementById('betsize').value
  }
  if (document.getElementById('betsize').value > saved.money) {
    document.getElementById('betsize').value = saved.money
  }
  saved.bet = parseInt(document.getElementById('betsize').value);
  if (document.getElementById('betsize').value < 1) {
    saved.bet = 1
  }
  if (document.getElementById('betsize').value === '') {
    saved.bet = 1
  }
});


  function Roll() {
    if (document.getElementById('betsize').value < 1) {
      document.getElementById('betsize').value = 1
    }
    SlotOn = true;
    rollAudio()

    slotsSpinning = 3;
    if (saved.debt > 0) {
      saved.debt = saved.debt + saved.debt * saved.loanNum
    } 
    debtDisplay.textContent = formatWhole(saved.debt);
    saved.money = saved.money - saved.bet
    moneyDisplay.textContent = saved.money
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
        if ( document.getElementById('betsize').value >= saved.money) {
          document.getElementById('betsize').value = saved.money
          saved.bet = saved.money
        }
        if (saved.mode === 2 && saved.money >= 10000) {
          loadWin()
        }
        if (saved.debt > 10000) {
          Defeat.currentTime = 30
          Lose.pause()
          Win.pause()
          if (saved.cA === 1) {Defeat.play()}
          return animateBackground3()
          }
        // Save a variable to local storage
localStorage.setItem("saved", JSON.stringify(saved));
if (saved.debt < 0) {
  saved.debt = 0
  saved.loanNum = 0
  document.getElementById("debt-display").textContent = 0
  if (saved.mode === 3) {
    loadWin()
  }
}
      });
  }

  function stopSpinning() {
    slotsSpinning--;
    if (saved.cA === 1) {SlotsRolling.pause()}
        //If 1, 2 or 3 7's
        if (slot1Index === `url("images/slot1.png")` || slot2Index === `url("images/slot1.png")` || slot3Index === `url("images/slot1.png")`) {
          if (slot1Index === `url("images/slot1.png")` && slot2Index === `url("images/slot1.png")` || slot2Index === `url("images/slot1.png")` && slot3Index === `url("images/slot1.png")` || slot1Index === `url("images/slot1.png")` && slot3Index === `url("images/slot1.png")`) {
              if (slot1Index === `url("images/slot1.png")` && slot2Index === `url("images/slot1.png")` && slot3Index === `url("images/slot1.png")`) {
                saved.betwas = saved.bet
                if (saved.debt > 0) {
                  saved.money = saved.money + saved.bet
                  saved.bet = saved.bet * 500
                  saved.debt = saved.debt - saved.bet
                  debtDisplay.textContent = formatWhole(saved.debt)
                }
      
                if (saved.debt === 0) { 
                  saved.bet = saved.bet * 500
                  saved.money = saved.bet + saved.money
                }
                document.getElementById("win-display").textContent = "You just won x500!!!"
                moneyDisplay.textContent = saved.money
                document.getElementById('betsize').value =  saved.betwas
                saved.bet = saved.betwas
                animateBackground(document.querySelector(".bg-image"))
                if (saved.cA === 1) { Win.play()}
                return
              }
              else if (slot1Index === `url("images/slot1.png")` && slot2Index === `url("images/slot1.png")` || slot2Index === `url("images/slot1.png")` && slot3Index === `url("images/slot1.png")` || slot1Index === `url("images/slot1.png")` && slot3Index === `url("images/slot1.png")`)  
              saved.betwas = saved.bet
              if (saved.debt > 0) {
                saved.money = saved.money + saved.bet
                saved.bet = saved.bet * 70
                saved.debt = saved.debt - saved.bet
                debtDisplay.textContent = formatWhole(saved.debt)
              }
    
              if (saved.debt === 0) { 
                saved.bet = saved.bet * 70
                saved.money = saved.bet + saved.money
              }
              document.getElementById("win-display").textContent = "You just won x70!!!"
              document.getElementById('betsize').value =  saved.betwas
              saved.bet = saved.betwas
              moneyDisplay.textContent = saved.money
              animateBackground(document.querySelector(".bg-image"))
              if (saved.cA === 1) { Win.play()}
              return
          }
          else if (slot1Index === `url("images/slot1.png")` || slot2Index === `url("images/slot1.png")` || slot3Index === `url("images/slot1.png")`) 
          saved.betwas = saved.bet
          if (saved.debt > 0) {
            saved.money = saved.money + saved.bet
            saved.bet = saved.bet * 2
            saved.debt = saved.debt - saved.bet
            debtDisplay.textContent = formatWhole(saved.debt)
          }

          if (saved.debt === 0) {
            saved.bet = saved.bet * 2
            saved.money = saved.bet + saved.money
          }
          document.getElementById("win-display").textContent = "You just won x2!!!"
          document.getElementById('betsize').value =  saved.betwas
          saved.bet = saved.betwas
          moneyDisplay.textContent = saved.money
          animateBackground(document.querySelector(".bg-image"))
          if (saved.cA === 1) { Win.play()}
          return
        }

        //If 3 Bars
        if (slot1Index === `url("images/slot2.png")` && slot2Index === `url("images/slot2.png")` && slot3Index === `url("images/slot2.png")`) {
          saved.betwas = saved.bet
          if (saved.debt > 0) {
            saved.money = saved.money + saved.bet
            saved.bet = saved.bet * 80
            saved.debt = saved.debt - saved.bet
            debtDisplay.textContent = formatWhole(saved.debt)
          }

          if (saved.debt === 0) { 
            saved.bet = saved.bet * 80
            saved.money = saved.bet + saved.money
          }
          document.getElementById("win-display").textContent = "You just won x80!!!"
          document.getElementById('betsize').value =  saved.betwas
          saved.bet = saved.betwas
          moneyDisplay.textContent = saved.money
          animateBackground(document.querySelector(".bg-image"))
          if (saved.cA === 1) { Win.play()}
          return
        }
        //If 2 Lemons and 1 Bar
        if (slot1Index === `url("images/slot3.png")` && slot2Index === `url("images/slot3.png")` && slot3Index === `url("images/slot2.png")` || slot1Index === `url("images/slot3.png")` && slot2Index === `url("images/slot2.png")` && slot3Index === `url("images/slot3.png")` || slot1Index === `url("images/slot2.png")` && slot2Index === `url("images/slot3.png")` && slot3Index === `url("images/slot3.png")`) {
          saved.betwas = saved.bet
          if (saved.debt > 0) {
            saved.money = saved.money + saved.bet
            saved.bet = saved.bet * 8
            saved.debt = saved.debt - saved.bet
            debtDisplay.textContent = formatWhole(saved.debt)
          }

          if (saved.debt === 0) { 
            saved.bet = saved.bet * 8
            saved.money = saved.bet + saved.money
          }
          document.getElementById("win-display").textContent = "You just won x8!!!"
          document.getElementById('betsize').value =  saved.betwas
          saved.bet = saved.betwas
          moneyDisplay.textContent = saved.money
          animateBackground(document.querySelector(".bg-image"))
          if (saved.cA === 1) { Win.play()}
          return
        }
        //If 3 Lemons
        if (slot1Index === `url("images/slot3.png")` && slot2Index === `url("images/slot3.png")` && slot3Index === `url("images/slot3.png")`) {
          saved.betwas = saved.bet
          if (saved.debt > 0) {
            saved.money = saved.money + saved.bet
            saved.bet = saved.bet * 9
            saved.debt = saved.debt - saved.bet
            debtDisplay.textContent = formatWhole(saved.debt)
          }

          if (saved.debt === 0) {   
            saved.bet = saved.bet * 9
            saved.money = saved.bet + saved.money
          }
          document.getElementById("win-display").textContent = "You just won x9!!!"
          document.getElementById('betsize').value =  saved.betwas
          saved.bet = saved.betwas
          moneyDisplay.textContent = saved.money
          animateBackground(document.querySelector(".bg-image"))
          if (saved.cA === 1) { Win.play()}
          return
        }
        //If 2 Watermelons 1 Bar
        if (slot1Index === `url("images/slot4.png")` && slot2Index === `url("images/slot4.png")` && slot3Index === `url("images/slot2.png")`|| slot1Index === `url("images/slot4.png")` && slot2Index === `url("images/slot2.png")` && slot3Index === `url("images/slot4.png")` || slot1Index === `url("images/slot2.png")` && slot2Index === `url("images/slot4.png")` && slot3Index === `url("images/slot4.png")`) {
          saved.betwas = saved.bet
          if (saved.debt > 0) {
            saved.money = saved.money + saved.bet
            saved.bet = saved.bet * 150
            saved.debt = saved.debt - saved.bet
            debtDisplay.textContent = formatWhole(saved.debt)
          }

          if (saved.debt === 0) { 
            saved.bet = saved.bet * 150
            saved.money = saved.bet + saved.money
          }
          document.getElementById("win-display").textContent = "You just won x150!!!"
          document.getElementById('betsize').value =  saved.betwas
          saved.bet = saved.betwas
          moneyDisplay.textContent = saved.money
          animateBackground(document.querySelector(".bg-image"))
          if (saved.cA === 1) { Win.play()}
          return
        }
        //If 3 Watermelons
        if (slot1Index === `url("images/slot4.png")` && slot2Index === `url("images/slot4.png")` && slot3Index === `url("images/slot4.png")`) {
          saved.betwas = saved.bet
          if (saved.debt > 0) {
            saved.money = saved.money + saved.bet
            saved.bet = saved.bet * 200
            saved.debt = saved.debt - saved.bet    
            debtDisplay.textContent = formatWhole(saved.debt)
          }

          if (saved.debt === 0) {  
            saved.bet = saved.bet * 200
            saved.money = saved.bet + saved.money
          }
          document.getElementById("win-display").textContent = "You just won x200!!!"
          document.getElementById('betsize').value =  saved.betwas
          saved.bet = saved.betwas
          moneyDisplay.textContent = saved.money
          animateBackground(document.querySelector(".bg-image"))
          if (saved.cA === 1) { Win.play()}
          return
        }
        //If 2 Bells 1 Bar
        if (slot1Index === `url("images/slot5.png")` && slot2Index === `url("images/slot5.png")` && slot3Index === `url("images/slot2.png")`|| slot1Index === `url("images/slot5.png")` && slot2Index === `url("images/slot2.png")` && slot3Index === `url("images/slot5.png")` || slot1Index === `url("images/slot2.png")` && slot2Index === `url("images/slot5.png")` && slot3Index === `url("images/slot5.png")`) {
          saved.betwas = saved.bet
          if (saved.debt > 0) {
            saved.money = saved.money + saved.bet
            saved.bet = saved.bet * 90
            saved.debt = saved.debt - saved.bet
            debtDisplay.textContent = formatWhole(saved.debt)
          }

          if (saved.debt === 0) {
            saved.bet = saved.bet * 90
            saved.money = saved.bet + saved.money
          }
          document.getElementById("win-display").textContent = "You just won x90!!!"
          document.getElementById('betsize').value =  saved.betwas
          saved.bet = saved.betwas
          moneyDisplay.textContent = saved.money
          animateBackground(document.querySelector(".bg-image"))
          if (saved.cA === 1) { Win.play()}
          return
        }
        //If 3 Bells
        if (slot1Index === `url("images/slot5.png")` && slot2Index === `url("images/slot5.png")` && slot3Index === `url("images/slot5.png")`) {
          saved.betwas = saved.bet
          if (saved.debt > 0) {
            saved.money = saved.money + saved.bet
            saved.bet = saved.bet * 100
            saved.debt = saved.debt - saved.bet
            debtDisplay.textContent = formatWhole(saved.debt)
          }

          if (saved.debt === 0) {   
            saved.bet = saved.bet * 100
            saved.money = saved.bet + saved.money
          }
          document.getElementById("win-display").textContent = "You just won x100!!!"
          document.getElementById('betsize').value =  saved.betwas
          saved.bet = saved.betwas
          moneyDisplay.textContent = saved.money
          animateBackground(document.querySelector(".bg-image"))
          if (saved.cA === 1) { Win.play()}
          return
        }
        //If 2 Cherries 1 Bar
        if (slot1Index === `url("images/slot6.png")` && slot2Index === `url("images/slot6.png")` && slot3Index === `url("images/slot2.png")`|| slot1Index === `url("images/slot6.png")` && slot2Index === `url("images/slot2.png")` && slot3Index === `url("images/slot6.png")` || slot1Index === `url("images/slot2.png")` && slot2Index === `url("images/slot6.png")` && slot3Index === `url("images/slot6.png")`) {
          saved.betwas = saved.bet
          if (saved.debt > 0) {
            saved.money = saved.money + saved.bet
            saved.bet = saved.bet * 4
            saved.debt = saved.debt - saved.bet
            debtDisplay.textContent = formatWhole(saved.debt)
          }

          if (saved.debt === 0) {       
            saved.bet = saved.bet * 4
            saved.money = saved.bet + saved.money
          }

          document.getElementById("win-display").textContent = "You just won x4!!!"
          document.getElementById('betsize').value =  saved.betwas
          saved.bet = saved.betwas
          moneyDisplay.textContent = saved.money
          animateBackground(document.querySelector(".bg-image"))
          if (saved.cA === 1) { Win.play()}
          return
        }
         //If 3 Cherries
         if (slot1Index === `url("images/slot6.png")` && slot2Index === `url("images/slot6.png")` && slot3Index === `url("images/slot6.png")`) {
          saved.betwas = saved.bet
          if (saved.debt > 0) {
            saved.money = saved.money + saved.bet
            saved.bet = saved.bet * 5
            saved.debt = saved.debt - saved.bet
            debtDisplay.textContent = formatWhole(saved.debt)
          }

          if (saved.debt === 0) {
            saved.bet = saved.bet * 5
            saved.money = saved.bet + saved.money
          }
          document.getElementById("win-display").textContent = "You just won x5!!!"
          document.getElementById('betsize').value =  saved.betwas
          saved.bet = saved.betwas
          moneyDisplay.textContent = saved.money
         animateBackground(document.querySelector(".bg-image"))
         if (saved.cA === 1) { Win.play()}
          return
        }

        document.getElementById("win-display").textContent = inspire[Math.floor(Math.random() * inspire.length)]
        animateBackground(document.querySelector(".bg-image1"))

        // Save a variable to local storage
        localStorage.setItem("saved", JSON.stringify(saved));

        if (saved.money > 0) {
        Lose.loop = false;
        Lose.currentTime = 0
        if (saved.cA === 1) {Lose.play()}
        }

          //loan shark
          if (saved.money < 1 && saved.loanNum === 0.05) {
            Defeat.currentTime = 30
            if (saved.cA === 1) {Lose.pause()}
            if (saved.cA === 1) {Defeat.play()}
          animateBackground3()
          }

          if (saved.money < 1 && saved.loanNum === 0.01 || saved.money < 1 && saved.loanNum === 0.2) {
            saved.loanNum = 0.05
            localStorage.setItem("saved", JSON.stringify(saved));
            if (saved.cA === 1) {Lose.pause()}
            debtM.loop = true;
            if (saved.cA === 1) { debtM.play()}
            animateBackground(document.querySelector(".bg-image2"))
            document.querySelector(".bg-image2").classList.remove("animate1");
            document.querySelector("#debt-button").classList.remove("animate1");
            animateBackground2()
            animateBackground4()
            if (saved.mode === 3) {
              saved.loanNum = 0.3
              document.getElementById("win-display").textContent = "Loan Shark: Hey'a pal. I noticed youse are down again. Now pops always told me demons give second chances, so here's your fiery hell. 30% per spin this time 'round. Just remember buddy, I will pummel you to a pulp, ditch youse in who knows where and break a thumb or two while I'm at it. So, youse best pay up or youse be wishing you had. Capisce?"
            }
            else {
            document.getElementById("win-display").textContent = "Loan Shark: Hey'a pal. I noticed youse are down again. Now pops always told me to give second chances, so here's yours. 5% per spin this time 'round. Just remember buddy, I will make sure to have my goons pay a visit to youse if youse don't pay your debt. And trust me, it won't be pretty. Youse'll find yourself swimming with the fishes or taking a permanent nap in a concrete pair of shoes at the bottom of the river. So, youse best pay up or youse be wishing you had. Capisce?"
            }}

          if (saved.money < 1 && saved.loanNum === 0 && saved.mode === 2 || saved.money < 1 && saved.loanNum === 0.1 && saved.mode === 3) {
            saved.loanNum = 0.01
            localStorage.setItem("saved", JSON.stringify(saved));
            if (saved.cA === 1) {Lose.pause()}
            debtM.loop = true;
            if (saved.cA === 1) {debtM.play()}
            animateBackground(document.querySelector(".bg-image2"))
            animateBackground2()
            animateBackground4()
            if (saved.mode === 3) {
              saved.loanNum = 0.2
              document.getElementById("win-display").textContent = "Loan Shark: Hey'a pal. I noticed youse are down quite a bit. You like someone who enjoys pain, so here's the deal. I'll give youse a free $1000! All youse gotta do is pay it back. Now time is money so let's say I's increase that debt of yours by 20% per spin? We got a deal?"
            }
            else {
            document.getElementById("win-display").textContent = "Loan Shark: Hey'a pal. I noticed youse are down quite a bit. How 'bouts I string ya a deal? I'll give youse a free $1000! All youse gotta do is pay it back. Now time is money so let's say I's increase that debt of yours by 1% per spin? We got a deal?"
            }}
            if (saved.mode === 2 && saved.money >= 1000000) {
              loadWin()
            }

            if (saved.debt > 10000) {
              Defeat.currentTime = 30
              if (saved.cA === 1) {Defeat.play()}
              return animateBackground3()
              }
              if (saved.debt < 0) {
                saved.debt = 0
                saved.loanNum = 0
                document.getElementById("debt-display").textContent = 0
                if (saved.mode === 3) {
                  loadWin()
                }
              }
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
      }, timeSync);
    });
  }
});

function changeAudio() {


  //mute
  if (saved.cA === 1) {
    Crank.pause();
    Lose.pause();
    Defeat.pause();
    Win.pause();
    SlotsRolling.pause();
    debtM.pause();
    cut.pause();
    saved.cA = 0
    document.querySelector(".top-right1").classList.add("animate");
    void document.querySelector(".top-right").offsetWidth;
    void document.querySelector(".top-right1").offsetWidth;
    document.querySelector(".top-right").classList.add("animate");
  }
  //unmute
  else {
    saved.cA = 1
    document.querySelector(".top-right").classList.remove("animate");
    void document.querySelector(".top-right1").offsetWidth;
    void document.querySelector(".top-right").offsetWidth;
    document.querySelector(".top-right1").classList.remove("animate")}
}

function ez(){
  animateBackground1()
}

function gameStart(){
  if (saved.cA === 1) {Opening.pause()
  Selected.loop = false
  Selected.play()}
  document.querySelector(".cont").classList.remove("animate");
  void document.querySelector(".cont").offsetWidth;
  document.querySelector("html").classList.remove("animate2");
  void document.querySelector("html").offsetWidth;
  if (saved.mode === 1) {
    document.querySelector(".Easy").classList.add("animate");
    saved.money = 1e100
  }
  if (saved.mode === 2) {
    document.querySelector(".Normal").classList.add("animate");
  }
  if (saved.mode === 3) {
    document.querySelector(".Hard").classList.add("animate");
    saved.debt = 1000
    saved.money = 500
    saved.loanNum = 0.1
  }

  setTimeout(() => {
    document.querySelector(".Easy").classList.remove("animate");
    void document.querySelector(".Easy").offsetWidth;
    document.querySelector(".Normal").classList.remove("animate");
    void document.querySelector(".Normal").offsetWidth;
    document.querySelector(".Hard").classList.remove("animate");
    void document.querySelector(".Hard").offsetWidth;
    document.querySelector(".cont").classList.add("animate1");
    document.querySelector(".start").classList.add("animate")
    }, 4000);

    document.getElementById("money-display").textContent = saved.money
  document.getElementById("debt-display").textContent = formatWhole(saved.debt)
  startTimer()
  localStorage.setItem("saved", JSON.stringify(saved));
}

function loadWin() {
  stopTimer()
  document.querySelector(".start").classList.remove("animate");
  void document.querySelector(".start").offsetWidth;
  if (saved.mode === 2) {
  document.querySelector(".WinningNorm").classList.add("animate")}
  if (saved.mode === 3) {
    document.querySelector(".WinningNight").classList.add("animate")}
}

let startTime = 0;

function startTimer() {
  startTime = Date.now()
  localStorage.setItem('time', startTime)
}

function stopTimer() {
  let elapsedSeconds = Math.floor((Date.now() - localStorage.getItem('time')));
  document.getElementById("stopwatch").textContent = formatTime1(elapsedSeconds)
}

function formatTime1(elapsedSeconds) {
  let date = elapsedSeconds;
  let ma = date.toString();
  let ms = ma.substr(ma.length - 3, 2);
  let seconds = Math.floor((date / 1000) % 60);
  let minutes = Math.floor((date / 1000 / 60) % 60);
  let hours = Math.floor((date / (1000 * 60 * 60)) % 24);
  let days = Math.floor(date / (1000 * 60 * 60 * 24));
  
  return `${days}:${hours}:${minutes}:${seconds}.${ms}`
}

function returnTo() {
  saved.debt = 0;
  saved.money = 10;
  saved.bet = 1;
  saved.betwas = 1;
  saved.loanNum = 0;
  saved.mode = 0;
  saved.start = true;
  localStorage.setItem("saved", JSON.stringify(saved));
  location.reload(true)
}