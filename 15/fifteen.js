window.onload = function(){
    
    function puzAreaDivs(){
        var array = document.getElementById("puzzlearea").children;
        
        for(var i=0; i < array.length; i++){
            var divid = "number" + array[i].innerHTML.toString();
            
            array[i].setAttribute("id",divid);
            array[i].style.border = "2px solid black";
            array[i].style.width = "96px";
            array[i].style.height = "96px";
            array[i].style.backgroundColor = 'teal';
            array[i].style.float = "left";
        }
    }
    
    function shuffle(){
        var array = document.getElementById("puzzlearea").childNodes;
        var eleNodes = [];
        var used_indexes = [];
        var newChildren = [];
        var count = 15;
        var puzz = document.getElementById("puzzlearea");
        
        for(var j =0; j < array.length; j++){
            if(array[j].nodeType == 1){
                eleNodes.push(array[j]);
            }
        }
        
        while(count != 0){
            var x = Math.floor((Math.random() * 15));
            used_indexes.push(15);
            
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
    
    button.addEventListener("click", function(){shuffle();});
    
    puzAreaDivs();
    
};