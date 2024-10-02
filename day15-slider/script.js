const left = document.querySelector ('.left');
const right = document.querySelector ('.right');
const slider = document.querySelector ('.slider');
const images = document.querySelectorAll ('.image')

let slideNumber = 1;
const length = images.length;

const nextslide = () =>{
    slider.style.transform = `translatex(-${slideNumber*600}px)`;
    slideNumber++;
};
const prevslide = () =>{
    slider.style.transform = `translatex(-${(slideNumber-2)*600}px)`;
    slideNumber--;
};

const getfirstslide = () =>{
    slider.style.transform = `translatex(0px)`;
    slideNumber = 1;
};
const getlastslide = () =>{
    slider.style.transform = `translatex(-${(length-1)*600}px)`;
    slideNumber = length;
};

right.addEventListener('click',() =>{
    if(slideNumber <length){
       nextslide();
    }else{
       getfirstslide(); 
    }
});
left.addEventListener('click',() =>{
    if(slideNumber > 1){
        prevslide();
    }else{
       getlastslide(); 
    }
});
