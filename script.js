var number1=Math.floor(Math.random()*6+1)
var number2=Math.floor(Math.random()*6+1)

document.querySelector(".dice1").setAttribute("src","dice"+number1+".png")

document.querySelector(".dice2").setAttribute("src","dice"+number2+".png")


if(number1>number2){
  document.querySelector(".heading").innerHTML="Player 1 Wins"
} else if(number2>number1){
  document.querySelector(".heading").innerHTML="Player 2 Wins"
} else{
  document.querySelector(".heading").innerHTML="Its a Tie!"
}
