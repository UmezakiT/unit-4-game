
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

  });
});


// crystal's value
for(var i=0; i<4; i++){
  crystalNum.push(Math.floor(Math.random()*12)+1);
}

console.log(crystalNum);


for(var i =0; i<crystalNum.length; i++){

  $("#azur").attr("", crystalNum[0]);
$("#cel").attr("", crystalNum[1]);
$("#diop").attr("", crystalNum[2]);
$("#hal").attr("", crystalNum[3]);
  var imageCrystals = $("<img>");
  imageCrystals.addClass("crysImages");
  imageCrystals.attr("data-crystalvalue", crystalNum[0]);
  $("#crystalRow").append(imageCrystals);

}


$(".crysImages").on("click", function(){
  unitsTotal += parseInt($(this).attr("data-crystalvalue"));
  console.log(unitsTotal);
  $("#crystalsAccumulated").text(unitsTotal);
});
