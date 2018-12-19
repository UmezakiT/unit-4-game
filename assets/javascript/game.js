
var unitNum= 0;
var wins= 0;
var losses= 0;
var crystalNum= [];
var unitsTotal= 0;


$(document).ready(function(){

  $("#startButton").on("click", function(){
    console.log("clicked");
  
    unitNum= Math.floor(Math.random()*120)+19;
    console.log(unitNum);
    $("#unitRandom").text("Units = " + unitNum);
    newGame();

  });
});


// crystal's value
for(var i=0; i<4; i++){
  crystalNum.push(Math.floor(Math.random()*12)+1);
}
console.log(crystalNum);


$("#azur").attr("crystalvalue", crystalNum[0]);
$("#cel").attr("crystalvalue", crystalNum[1]);
$("#diop").attr("crystalvalue", crystalNum[2]);
$("#hal").attr("crystalvalue", crystalNum[3]);

for(var i =0; i<crystalNum.length; i++){

  var imageCrystals = $("<img>");
  imageCrystals.addClass("crysImages");
  imageCrystals.attr("crystalvalue", crystalNum[i]);
  $(".crysImages").append(imageCrystals);

}


$(".crysImages").on("click", function(){
  unitsTotal += parseInt($(this).attr("crystalvalue"));
  console.log(unitsTotal);
  $("#crystalsAccumulated").text("Crystals Accumulated: " + unitsTotal);

  if (unitNum === unitsTotal) {
    wins++;
    unitsTotal = 0;
    displayWin();
    newGame();
  }

  else if (unitNum > unitsTotal) {
    losses++;
    unitsTotal = 0;
    displayLoss(); 
    newGame();
  }
});

function displayWin(){
  var winner = 'Wins: ' + wins;
  $("#wins").text(winner);
}

function displayLoss(){
  var loser = 'Losses: ' + losses;
  $("#loss").text(loss);
}

function newGame(){

  $("#crystalsAccumulated").text("Crystals Accumulated: 0");
  
}
