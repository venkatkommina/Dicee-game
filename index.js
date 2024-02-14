// alert("working");

var pl1=Math.floor((Math.random())*6)+1;
var pl2=Math.floor((Math.random())*6)+1;

var randomImage1 ="./images/dice"+pl1+".png";

document.querySelector("img.pl1").setAttribute("src",randomImage1);

var randomImage2 ="./images/dice"+pl2+".png";

document.querySelector("img.pl2").setAttribute("src",randomImage2);

if(pl1>pl2){
    document.querySelector("h1").innerHTML="🚩Player1 wins!";
}
else if(pl1<pl2){
    document.querySelector("h1").innerHTML="Player2 wins!🚩";
}
else{
    document.querySelector("h1").innerHTML="🚩Draw🚩";
}
