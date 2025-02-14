// acess the images
let slideImages = document.querySelectorAll("img");

// acessing the next nad p[revious buttons
let nextBtn = document.querySelector(".next");
let Btn = document.querySelector(".preview");

// acessing the dot indicators

let indicators = document.querySelectorAll(".dot");
console.log(slideImages);

// to text we write console the log and check list data in console

let counter = 0;

let imagecounter;

// adding js features and function now

nextBtn.addEventListener("click", slideNext);
//  slide next is custom built function made my me

function slideNext() {
  slideImages[counter].style.animation = "next1 0.5s ease-in forwards";
  if (counter >= slideImages.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  slideImages[counter].style.animation = "next2 0.5s ease-in forwards";
  updateActiveIndicator();
}

Btn.addEventListener("click", Slideprev);

function Slideprev() {
  slideImages[counter].style.animation = "prev1 0.5s ease-in forwards";
  if (counter === 0) {
    counter = slideImages.length - 1;
  } else {
    counter--;
  }
  slideImages[counter].style.animation = "prev2 0.5s ease-in forwards";
  updateActiveIndicator();
}

// autoslider images

function autoSliding() {
  imagecounter = setInterval(slideNext, 3000);
}
autoSliding();
//  javascript le animatinma jahele ni milliseconds ma kam garxa 1000millisecond = 1 sec

// auto stop for sliding image while mouse pointer on screen

const container = document.querySelector(".slide-container");
container.addEventListener("mouseover", () => {
  clearInterval(imagecounter);
});

// auto on slide after stoping slide image while mouse pointer off screen
container.addEventListener("mouseout", autoSliding);

// update active slider pointer indicator

function updateActiveIndicator() {
  indicators.forEach((dot, index) => {
    dot.classList.remove("active");
    if (index === counter) {
      dot.classList.add("active");
    }
  });
}


// aba click garda ni sarne chayooo dot indicator ma

indicators.forEach((dot) => {
  dot.addEventListener("click",function() {
      indicators.forEach((dot) => dot.classList.remove("active"));
      dot.classList.add("active");

      let imageid = parseInt(dot.getAttribute("keys"),5);
      if(imageid>counter){
        slideImages[counter].style.animation = "next1 0.5s ease-in forwards";
        counter = imageid;
        slideImages[counter].style.animation = "next2 0.5s ease-in forwards";
      } else if (imageid< counter) {
        slideImages[counter].style.animation = "prev1 0.5s ease-in forwards";
        counter = imageid;
        slideImages[counter].style.animation = "prev2 0.5s ease-in forwards";
      }
      updateActiveIndicator();
  });
});
