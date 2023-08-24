
const colors = ["green","red","rgba(133,122,200)", "#f15025"]

const btn = document.getElementById("btn");
const gg = document.getElementById("gg");
const color = document.querySelector(".color");

///span is a inline level element(container) used to markup a part of a text or document.

//adding eventListners:

btn.addEventListener("click", function(){
    // console.log(document.getElementsByTagName("div")[1].appendChild(gg));

    //accesing values of colors[] array. 
    //get the random num between 0 - 3;
    const randomNumber = getRandomNumbers();
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber];
    //btn 
    color.textContent = colors[randomNumber];

})

function getRandomNumbers()
{ return Math.floor(Math.random() * colors.length); }
