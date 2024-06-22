let flex1=document.querySelector('.flx1');
let flex2=document.querySelector('.flx2');
let flex3=document.querySelector('.flx3');
let flex4=document.querySelector('.flx4');
let navigation=document.querySelector('.mobile-view');
let navbar=document.querySelector('.navbar');
let students=0;
let college=0;
let developers=0;
let visitors=0;

let intervalId = setInterval(function(){
    flex1.innerHTML = `${++students} <br> Students`;
    if (students === 1000){
        flex1.innerHTML='1000 + Students ';
        clearInterval(intervalId);
    }
},1)
navigation.addEventListener('click',function(){
    navbar.classList.toggle('vertical_list');

})
let interval2 = setInterval(function(){
    flex2.innerHTML = `${++college}  <br> Colleges`;
    if (college === 100) {
        flex2.innerHTML='100 + Colleges';
        clearInterval(interval2);
    }
},10)

let interval3 = setInterval(function(){
    flex3.innerHTML = `${++developers}  <br> Developers`;
    if (developers === 2000) {
        flex3.innerHTML='2000 + Developers';
        clearInterval(interval3);
    }
},10)

let interval4 = setInterval(function(){
    flex4.innerHTML = `${++visitors}  <br> Visitors`;
    if (visitors === 3000) {
        flex4.innerHTML='3000 + visitors';
        clearInterval(interval4);
    }
},10)
