
var num1=Math.floor(1+Math.random()*6);
var num2=Math.floor(1+Math.random()*6);
document.querySelector(".img1").setAttribute("src","images/dice"+num1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+num2+".png");
if(num1>num2){
  document.querySelector("h1").innerHTML="Player 1 Wins!";
}else if(num2>num1){
  document.querySelector("h1").innerHTML="Player 2 Wins!";
}
