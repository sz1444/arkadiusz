var menu = document.querySelector('#menu');


menu.addEventListener('click', mobileMenu);
window.addEventListener('resize', resize);

function mobileMenu() {
   var a = document.querySelector('nav');
   
   if (a.style.display == 'block') {
      a.style.display = "none"
   } else {
      a.style.display = "block"
   }
}

function resize(){
    var a = document.querySelector('nav');
    if(window.innerWidth>850){
         a.style.display = 'block';
    }else{
    a.style.display = 'none';
   [].forEach.call(document.querySelectorAll('[id^=container]'),
      function (elem) {
         elem.style.display = 'block';
      }); 
       
    }
}

var menua = document.querySelectorAll('li a');
var menuList = document.querySelectorAll('li');




for (i = 0; i < menua.length; i++) {
   menua[i].addEventListener('click', display);
}


for (j = 0; j < menuList.length; j++) {
   menuList[j].addEventListener('click', active);
}

function active(){
   
     [].forEach.call(document.querySelectorAll('li'),
      function (elem) {
         elem.classList.remove('active');
      });
   this.classList.add('active');
   if(window.innerWidth<850){
      document.querySelector('nav').style.display = 'none'
   }
}



function display() {
   
   if(window.innerWidth>850){
   [].forEach.call(document.querySelectorAll('[id^=container]'),
      function (elem) {
         elem.style.display = 'none';
      });  
   var x = this.getAttribute("href");
   var y = document.querySelector(x);
   y.style.display = "block";
}
}
