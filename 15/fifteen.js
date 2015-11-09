window.onload = function(){
    
    function setup(){
        var button = document.getElementById("shufflebutton");
    
        document.getElementById("puzzlearea").appendChild(document.createElement("DIV"));
        
        button.addEventListener("click", function(){shuffle();});
        
        puzAreaDivs();
    } //end startup()
    
    function puzAreaDivs(){
        var array = document.getElementById("puzzlearea").children;
        
        for(var i=0; i < array.length; i++){
            var element = array[i];
            var divid = "number" + element.innerHTML.toString();
            
            if(divid == "number"){
                element.setAttribute("id",divid);
                element.style.border = "2px solid white";
                element.style.width = "96px";
                element.style.height = "96px";
                element.style.backgroundColor = "transparent";
                element.style.float = "left";
            } //end main if
            else{
                element.setAttribute("id",divid);
                element.style.border = "2px solid black";
                element.style.width = "96px";
                element.style.height = "96px";
                element.style.backgroundColor = "teal";
                element.style.float = "left";
                element.addEventListener("click",function(){besideEmptyCell(this);});
                element.addEventListener("mouseover",function(){highlightCell(this);});
                element.addEventListener("mouseout",function(){normal(this);});
            } //end main else
        } //end for
    } //end puzAreaDivs()
    
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
        
        puzAreaDivs();
    } //end shuffle()
    
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
    } //end besideEmptyCell()
    
    function highlightCell(object){
        if(besideEmptyCell(object)){
            object.style.backgroundColor = "#006600";
        }
    } //end highlightCell()
    
    function normal(object){
        object.style.backgroundColor = "teal";
    } //end normal()
    
    setup(); //start setup
}; //end window.onload()