window.onload = function(){
    
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
            }else{
                element.setAttribute("id",divid);
                element.style.border = "2px solid black";
                element.style.width = "96px";
                element.style.height = "96px";
                element.style.backgroundColor = "teal";
                element.style.float = "left";
            }
        }
    }
    
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
    }
    
    var button = document.getElementById("shufflebutton");
    
    document.getElementById("puzzlearea").appendChild(document.createElement("DIV"));
    
    button.addEventListener("click", function(){shuffle();});
    
    puzAreaDivs();
    
};