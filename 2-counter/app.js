
//set initial count
let count = 0;

//selection value and btns
var counter = document.querySelector("#value");
var btns = document.querySelectorAll(".btn");

// console.log(btns);

btns.forEach(function(btn) {
    
    btn.addEventListener('click', (e)=>{
        
        
        const action = e.currentTarget.classList;
               
        if(action.contains("increase"))
        {
            count ++;
        }
        else if(action.contains("decrease")) count--;
        else count=0;

        if(count > 0) counter.style.color = "green";

        if(count < 0) counter.style.color = "red";

        if(count === 0) counter.style.color = "#222"
        counter.textContent = count;

    })




    // console.log(item, item.getAttributeNames());

})

