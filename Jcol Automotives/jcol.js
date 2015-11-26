// Used to load functions on window opening
window.onload = function () {
   'use strict';
   
   //button actions
   function goTo(obj) {
      /*
      "Brevity is the soul of wit." - A Forever Knight(B 10)
      
      You may not realise unless you go back a few commits
      in the repo, but there were if statements for each menu
      option. I thought it was a waste of code lines, and
      since I realised that the code was repetitive, I sought for
      cleaner solution... This is a tip for future endevours:
      When you see code repeating, then you should be able
      to reduce it into one line or so.
      */
      
      var page;
      page = (obj.innerHTML).toLowerCase().replace(" ", "");
      window.location.href = page + ".html";
   } //end of goTo()
   
   //create menu items
   function menuBar() {
      
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
            child.setAttribute("id", child.innerHTML); // eg: id="Home"
            child.addEventListener("click", function () {goTo(this); });
         } //end if
      } //end for
      
   } //end of initMenuBar()
   
   function innerBody() {
      /* To Do */
   } //end of initInnrBody()
   
   function footers() {
      var div, i;
      div = document.getElementById("footers").childNodes;
      
      for (i = 0; i < div.length; i += 1) {
         if (div[i].nodeType === 1) {
            if (div[i].innerHTML === "Copyrighted 2015 JCOL®") {
               break;
            } //end if@lvl2
            div[i].style.float = "left";
            div[i].style.marginRight = "50px";
            div[i].addEventListener("click", function () { goTo(this); });
         } //end if@lvl 1
      } //end for
   } // end footers()
   
   menuBar();
   footers();   
}; //end window.onload