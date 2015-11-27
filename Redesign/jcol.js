window.onload = function () {
   'use strict';
   //Opens the respective page when chosen in menus
   function open(obj) {
      switch (obj.id) {
         case "home":
            window.location.href = "home.html";
            break;
         case "catalogue":
            window.location.href = "catalogue.html";
            break;
         case "promotions":
            window.location.href = "promotions.html";
            break;
         case "about":
            window.location.href = "about.html";
            break;
         case "contact":
            window.location.href = "contact.html";
            break;
         case "cart":
            window.location.href = "cart.html";
            break;
         case "footertitle":
            window.location.href = "home.html";
            break;
         case "footerhome":
            window.location.href = "home.html";
            break;
         case "footerabout":
            window.location.href = "about.html";
            break;
         case "footercontact":
            window.location.href = "contact.html";
            break;
         case "google":
            window.location.href = "https://plus.google.com/explore";
            break;
         case "facebook":
            window.location.href = "https://www.facebook.com";
            break;
         case "twitter":
            window.location.href = "https://www.twitter.com";
            break;
         case "footerdate":
            alert("Last Revised: November 27, 2015");
            break;
         default:
            break;
      }
   } //End function open()
   
   //Adds event listener to each menu item
   function menuOptions() {
      var options1, options2, i, child;
      options1 = document.getElementById("menubar").childNodes;
      options2 = document.getElementById("footers").childNodes;
      
      for (i = 0; i < options1.length; i += 1) {
         child = options1[i];
         
         if (child.nodeType === 1) {
            child.addEventListener("click", function () { open(this); });
         } //End if
      } //End for
      
      for (i = 0; i < options2.length; i += 1) {
         child = options2[i];
         
         if (child.nodeType === 1) {
            child.addEventListener("click", function () { open(this); });
         } //End if
      } //End for
   } //End function menuOptions();
   
   
   
   menuOptions();
}; //End window.onload()