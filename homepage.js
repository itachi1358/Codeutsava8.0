let video=document.querySelector('.introvideo');
let videocontainer=document.querySelector('.vid-container');
let navbar=document.querySelector('.navbar');
let codeutsava=document.querySelector('.codutsava');
let backgroundElement = document.querySelector('.background-add');
let codeinnovateceleb=document.querySelector('.cic');
let cictext=document.querySelector('.cic-text');
let content=document.querySelector('.content');
let doc=document.querySelector('*');
let start= document.querySelector('.start-btn');
let button=document.querySelector('.btn');
setTimeout(function() {
    navbar.classList.add('visible');
    backgroundElement.classList.add('visible3');
},5000);
setTimeout(function(){
    codeutsava.classList.add('visible2');
    codeinnovateceleb.classList.add('visible2');
    start.classList.add('visible-start-btn')
},5100);

video.addEventListener('ended',function(){
    video.classList.add('no-display');
    videocontainer.classList.add('no-display');
})