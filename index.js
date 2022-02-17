function randomNumberGenrator() {
    var randomNumber1 =Math.floor(Math.random()*6+1);    
    return 'images/dice'+randomNumber1+'.png';
}
var image = randomNumberGenrator()
document.querySelectorAll("img")[0].setAttribute("src",image);
var image1 = randomNumberGenrator()
document.querySelectorAll("img")[1].setAttribute("src",image1);

if (image > image1) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}else if (image1 > image) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}else {
    document.querySelector("h1").innerHTML = "Draw!";
}