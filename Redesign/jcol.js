window.onload = function () {
   'use strict';
   //Opens the respective page when chosen in menus
   function open(obj) {
      var page = obj.innerHTML.toLowerCase() + ".html";
      window.location.href = page;
   } //End function open()
   
   //Adds event listener to each menu item
   function menuOptions() {
      var options, i, child;
      options = document.getElementById("menubar").childNodes;
      
      for (i = 0; i < options.length; i += 1) {
         child = options[i];
         
         if (child.nodeType === 1) {
            child.addEventListener("click", function () { open(this); });
         } //End if
      } //End for
   } //End function menuOptions();
   
   menuOptions();
}; //End window.onload()