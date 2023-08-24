// we have 
// classList- shows/get all classes
// add - add class
// remove - remove class from the element
// toggle * - toggles class. (one liner does the job of add and remover() at once.)



const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function(){

    // console.log(links.className);
    // if(links.classList.contains("show-links"))
    //     links.classList.remove("show-links");
    // else
    //     links.classList.add("show-links");

    // One liner:
    links.classList.toggle("show-links")
    
})