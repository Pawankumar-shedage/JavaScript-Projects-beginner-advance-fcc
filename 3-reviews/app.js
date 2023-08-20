
const review =[
    {
        id:1,
        name:"Pawankumar Shedage",
        job:"Front-End Developer",
        img:"./pawan.png",
        text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"

    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        img: 'https://www.course-api.com/images/people/person-2.jpeg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
      },
      {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        img: 'https://www.course-api.com/images/people/person-4.jpeg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
      },
      {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
      },
];


//selecting items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

//now we want to change above items dynamically when below btns are clicked.

// get buttons
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const surpriseBtn = document.querySelector(".random-btn");

//ByClass we get collection of items. and by id we get single item.

//set starting item
let currentItem = 0;    //total items 0,1,2,3 (4)

// setting btn funtionality. 

prevBtn.addEventListener('click', function(){
    currentItem --;
    if(currentItem < 0)
    {
        currentItem = review.length-1; // set to last item.(Person)
    }
    showPerson(currentItem);
})

//next btn. 
nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > review.length - 1)
    {
        // set to current item to 0
        currentItem = 0;
    }
    showPerson(currentItem);
})

//surprise button.
surpriseBtn.addEventListener('click',function(){
    //to get random index of person from review arr[] in the arr range.
    // let person_id = Math.floor(Math.random() * review.length);

    currentItem = Math.floor(Math.random() * review.length);
    console.log(currentItem)
    showPerson(currentItem);
})
   
function showPerson(personid)
{
    const item = review[personid];

    img.src  = item.img;
    author.textContent  = item.name;
    job.textContent = item.job;
    info.textContent= item.text;
}


//Load item
window.addEventListener('DOMContentLoaded', function(){
    // console.log("Hi there!")
    showPerson(currentItem);
});






