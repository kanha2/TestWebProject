var humberger=document.querySelector('.humberger');
var nav_item=document.querySelector('.nav-item');
var header=document.querySelector('header')
var head_message=document.querySelector('.head-message')
var initial=1;
var initial_Yoffset=0

head_message.style.backgroundPosition = "center"+(window.pageYOffset*0.5)+'px';

humberger.addEventListener('click',toggel);

function toggel(){
    if(initial==1){
        nav_item.classList.add('nav-visible');
        initial=0;
    }
    else{
        nav_item.classList.remove('nav-visible');
        initial=1;
    }
}

setInterval(()=>{
    initial_Yoffset=window.pageYOffset;
},300);

window.addEventListener('scroll',scrollFunctions);

function scrollFunctions(){
    if(window.pageYOffset>initial_Yoffset){
        header.style.opacity='0'
        header.style.pointerEvents='none'
        header.style.transitionDuration='0.3s'
    }else{
        header.style.opacity='1'
        header.style.pointerEvents='all'
        header.style.transitionDuration='0.3s'
    }

    head_message.style.backgroundPosition = "center "+(-window.pageYOffset*0.3)+'px';

}

