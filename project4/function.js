window.onload = function(){
    
    function setup(){
        document.getElementById("logoutButton").addEventListener("click",function() {
            logout();
        });
        
        message_list();
    }
    
    function message_list(){
        var httpXMLObj = new XMLHttpRequest();
        
        if (!httpXMLObj){
            alert("Unable to create XMLHttpRequest Object");
            return false;
        }
        
        httpXMLObj.onreadystatechange = function(){
            if (httpXMLObj.readyState === 4){
                if (httpXMLObj.status === 200){
                    document.getElementById("message_list").innerHTML = httpXMLObj.responseText;
                }
                else{
                    document.getElementById("message_list").innerHTML = "Error: Cannot read DB";
                }
            }
        } // end anon function()
        
        httpXMLObj.open("GET", "message_list.php");
        httpXMLObj.send();
    } //end message_list()
    
    function logout(){
        var httpXMLObj = new XMLHttpRequest();
        
        if (!httpXMLObj){
            alert("Unable to create XMLHttpRequest Object");
            return false;
        }
        
        httpXMLObj.open("GET","logout.php");
        httpXMLObj.send();
        
        window.location.href = "login.html";
    } // end logout()
    
    setup();
}; // end window.onload()