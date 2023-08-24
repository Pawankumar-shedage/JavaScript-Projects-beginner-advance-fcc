
// hex - #6 digit num.: 0 -9 and A - F (10 to 16)
const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];


const btn = document.getElementById("btn");
const color = document.querySelector(".color");



btn.addEventListener('click',()=>{
    //generating random hex value for color.
    let hexColor = "#"
    for(let i=0; i<6; i++)
    {
        hexColor += Math.floor(Math.random() * hex.length)
    }
    // console.log(hexColor);
    
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

//for auto click  *******************
// var button = document.getElementById('btn');


// function autoClick()
// {
//     button.click();
//     btn.addEventListener('click',()=>{
//         //generating random hex value for color.
//         let hexColor = "#"
//         for(let i=0; i<6; i++)
//         {
//             hexColor += Math.floor(Math.random() * hex.length)
//         }
//         // console.log(hexColor);
        
//         color.textContent = hexColor;
//         document.body.style.backgroundColor = hexColor;
//     });
// }

// for(let i=0; i<10; i++)
// {
//     //we don't use () when 
//     setTimeout(autoClick, 1000*i);
//     // console.log(i);
// }











