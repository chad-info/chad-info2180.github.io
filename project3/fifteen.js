window.onload = function(){
    // Set up the initial contents of webpage.
    function setup(){
        
        var button = document.getElementById("shufflebutton");
        button.addEventListener("click", function(){shuffle();});
        
        // Add empty tile
        document.getElementById("puzzlearea").appendChild(document.createElement("DIV"));
        document.getElementById("puzzlearea").style.backgroundImage = "url('lol.jpg')";
        
        puzAreaDivs();
    }
    
    function puzAreaDivs(){
        var array = document.getElementById("puzzlearea").children;
        
        var xpos = 0;
        var ypos = 0;
        
        for(var i=0; i < array.length; i++){
            var element = array[i];
            var divid = "number" + element.innerHTML.toString();
            
            if(divid == "number"){
                // Add attributes to empty tile
                element.setAttribute("id",divid);
                element.style.border = "2px solid transparent";
                element.style.width = "96px";
                element.style.height = "96px";
                element.style.backgroundColor = "white";
                element.style.float = "left";
            }
            else{
                // Add attributes to tiles
                element.setAttribute("id",divid);
                element.style.border = "2px solid black";
                element.style.width = "96px";
                element.style.height = "96px";
                element.style.backgroundColor = "transparent";
                element.style.float = "left";
                
                // Add event listeners to each tile
                element.addEventListener("click",function(){besideEmptyCell(this);});
                element.addEventListener("mouseover",function(){highlightCell(this);});
                element.addEventListener("mouseout",function(){normal(this);});
                element.addEventListener("click",function(){move(this);});
            }
        }
    } // end puzAreaDivs()
    
    function shuffle(){
        var array = document.getElementById("puzzlearea").childNodes;
        var eleNodes = [];
        var used_indexes = [];
        var newChildren = [];
        var count = 16;
        var puzz = document.getElementById("puzzlearea");
        
        for(var j =0; j < array.length; j++){
            if(array[j].nodeType == 1){
                eleNodes.push(array[j]);
            }
        }
        
        while(count != 0){
            var x = Math.floor((Math.random() * 16));
            used_indexes.push(16);
            
            if (used_indexes.indexOf(x) == -1){
                newChildren.push(eleNodes[x]);
                used_indexes.push(x);
                count--;
            }
        }
        
        while(puzz.firstChild){
            puzz.removeChild(puzz.firstChild);
        }
        
        for(var i=0; i < newChildren.length; i++){
            puzz.appendChild(newChildren[i]);
        }
        
        //puzAreaDivs();
    } 
    
    function besideEmptyCell(object){
        var puzzArea = document.getElementById("puzzlearea").children;
        
        var emptyC;
        var objIdx;
        
        for(var i=0; i < puzzArea.length; i++){
            if(puzzArea[i].getAttribute("id") == object.getAttribute("id")){
                objIdx = i;
            }
            if(puzzArea[i].getAttribute("id") == "number"){
                emptyC = i;
            }
        } //end for
        
        var above = emptyC - 4;
        var below = emptyC + 4;
        var toLeft = emptyC - 1;
        var toRight = emptyC + 1;
        
        if(objIdx == above || objIdx == below || objIdx == toLeft || objIdx == toRight){
            if(emptyC == 3 && objIdx == 4 || emptyC == 7 && objIdx == 8 || emptyC == 11 && objIdx == 12){
                return false;
            }
            else if(emptyC == 4 && objIdx == 3 || emptyC == 8 && objIdx == 7 || emptyC == 12 && objIdx == 11){
                return false;
            } //end else if
            else{
                return true;
            } //end else
        } //end main if
        else{
            return false;
        } //end main else
    }
    
    function highlightCell(object){
        if(besideEmptyCell(object)){
            object.style.borderColor = 'red';
            object.style.textDecoration = "underline";
            object.style.backgroundColor = "#006600";
        }
    } 
    
    function normal(object){
        object.style.borderColor = 'black';
        object.style.backgroundColor = "transparent";
        object.style.textDecoration = "initial";
        object.style.textDecoration = "initial";
        
    } 
    
    function move(object){
        var puzzArea = document.getElementById("puzzlearea");
        
        var emptyC = document.getElementById("number");
        var emptyCNS = emptyC.nextSibling;
        var objectNS = object.nextSibling;
        
        
        if(besideEmptyCell(object)){
            puzzArea.insertBefore(object,emptyCNS);
            puzzArea.insertBefore(emptyC,objectNS);
        }
    }
    
    function gameover(){
        var gameboard = document.getElementById("puzzlearea").children;
        var total = 0
        for(var i=0; i < gameboard.length; i++){
            if(i == gameboard[0].innerHTML){
                total++;
            }
        }
        
        if(total == gameboard.length){
            return true;
        }
        else{
            return false;
        }
    }
    
    function timeer(){}
    
    setup(); 
    
}; //end window.onload()