// Used to load functions on window opening
window.onload = function () {
   'use strict';
   
   //button actions
   function goTo(obj) {
      /*global alert*/
      //alert(obj.innerHTML);
      if (obj.innerHTML === "Home") {
         window.location.href = "index.html";
      }
      
      if (obj.innerHTML === "Catalogue") {
         window.location.href = "catalogue.html";
      }
      
      if (obj.innerHTML === "About Us") {
         window.location.href = "about.html";
      }
      
      if (obj.innerHTML === "Contact Us") {
         window.location.href = "contact.html";
      }
      
      if (obj.innerHTML === "Promotions") {
         window.location.href = "promotions.html";
      }
      
      if (obj.innerHTML === "Checkout") {
         window.location.href = "cart.html";
      }
   }
   
   //create menu items
   function initMenuBar() {
      
      //declarations
      var i, options, child;
      options = document.getElementById("menubar").childNodes;
            
      //menu options
      for (i = 0; i < options.length; i += 1) {
         child = options[i];
         
         if (child.nodeType === 1) {
            child.style.width = "164.6px";
            child.style.height = "38px";
            child.style.float = "left";
            child.setAttribute("id", child.innerHTML);
            child.addEventListener("click", function () {goTo(this); });
         }
      }
      
   } //end of initMenuBar()
   
   function initInnerBody() {} //end of initInnrBody()
   
   function initFooters() {
      var divs, i;
      divs = document.getElementById("footers").childNodes;
      
      for (i = 0; i < divs.length; i += 1) {
         if (divs[i].nodeType === 1) {
            if (divs[i].innerHTML === "Copyrighted 2015 JCOL®") {
               break;
            }
            divs[i].style.float = "left";
            divs[i].style.marginRight = "50px";
            divs[i].addEventListener("click", function () { goTo(this); });
         }
      }
   }
   
   initMenuBar();
   initFooters();   
}; //end window.onload