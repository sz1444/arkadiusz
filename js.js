var menu = document.querySelector('#menu');


menu.addEventListener("click", mobileMenu);


function mobileMenu() {
   var a = document.querySelector('nav');
   
   if (a.style.display == 'none') {
      a.style.display = "block"
   } else {
      a.style.display = "none"
   }
}

var menua = document.querySelectorAll('li a');
var menuList = document.querySelectorAll('li');




for (i = 0; i < menua.length; i++) {
   menua[i].addEventListener("click", display);
}


for (j = 0; j < menuList.length; j++) {
   menuList[j].addEventListener("click", active);
}

function active(){
   
     [].forEach.call(document.querySelectorAll('li'),
      function (elem) {
         elem.classList.remove('active');
      });
   this.classList.add('active');
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