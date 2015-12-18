window.onload = function(){
    
    //Load Inbox
    document.getElementById("inboxDiv").addEventListener("click",function() {
        var msg_list = document.getElementById("message_list").innerHTML;
        
        if (msg_list === ""){
            message_list();
            this.innerHTML = "Close Inbox";
        }else{
            empty("message_list");
            message_list_closed();
            this.innerHTML = "Open Inbox";
        }
    });
    
    //Log In User
    document.getElementById("logButton").addEventListener("click",function() {
        var text = document.getElementById("logButton").innerHTML;
        
        if (text === "Log In"){
            login();
            
        }else{
            logout();
            empty("message_list");
            empty("composeSection");
        }
    });
    
    //Compose a message
    document.getElementById("compose").addEventListener("click",function() {
        var cpsSec = document.getElementById("composeSection").innerHTML;
        
        if (cpsSec === ""){
            document.getElementById("composeSection").innerHTML = "Opening...";
            compose();
            document.getElementById("compose").innerHTML = "Close Composition"
        }else{
            empty("composeSection");
            document.getElementById("compose").innerHTML = "Compose New Message!"
        }
        
    });
    
    //Unload Inbox
    function empty(id){
        document.getElementById(id).innerHTML = "";
    } //end empty()
    
    //Write a message
    function compose(){
        var httpXMLObj = new XMLHttpRequest();
        
        if (!httpXMLObj){
            alert("Unable to create XMLHttpRequest Object");
            return false;
        }
        
        httpXMLObj.onreadystatechange = function(){
            if (httpXMLObj.readyState === 4){
                if (httpXMLObj.status === 200){
                    document.getElementById("composeSection").innerHTML = httpXMLObj.responseText;
                }
                else{
                    document.getElementById("composeSection").innerHTML = "Error: Ensure you are logged in";
                }
            }
        } // end anon function()
        
        httpXMLObj.open("GET", "message.php");
        httpXMLObj.send();
    } //end compose()
    
    //Get List of messages to user
    function message_list(){
        document.getElementById("message_list").innerHTML = "Loading...";
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
    
    function message_list_closed(){
        var httpXMLObj = new XMLHttpRequest();
        
        if (!httpXMLObj){
            alert("Unable to create XMLHttpRequest Object");
            return false;
        }
        
        httpXMLObj.open("GET", "message_list_closed.php");
        httpXMLObj.send();
    }
    
    //Log in User
    function login(){
        document.getElementById("loginSection").innerHTML = "Loading..."
        
        var httpXMLObj = new XMLHttpRequest();
        
        if (!httpXMLObj){
            alert("Unable to create XMLHttpRequest Object");
            return false;
        }
        
        httpXMLObj.onreadystatechange = function(){
            if (httpXMLObj.readyState === 4){
                if (httpXMLObj.status === 200){
                    document.getElementById("loginSection").innerHTML = httpXMLObj.responseText;
                }
                else{
                    document.getElementById("loginSection").innerHTML = "Error: Cannot read DB";
                }
            }
        } // end anon function()
        
        httpXMLObj.open("GET","login.php");
        httpXMLObj.send();
    } //end login()
    
    //Log Out user
    function logout(){
        document.getElementById("loginSection").innerHTML = "Loading...";
        var httpXMLObj = new XMLHttpRequest();
        
        if (!httpXMLObj){
            alert("Unable to create XMLHttpRequest Object");
            return false;
        }
        
        httpXMLObj.onreadystatechange = function(){
            if (httpXMLObj.readyState === 4){
                if (httpXMLObj.status === 200){
                    document.getElementById("loginSection").innerHTML = httpXMLObj.responseText;
                    document.getElementById("user_name_section").innerHTML = "";
                    //document.getElementById("logButton").innerHTML = "Log In";
                }
                else{
                    document.getElementById("home_html").innerHTML = "Error: Cannot read DB";
                }
            }
        } // end anon function()
        
        httpXMLObj.open("GET","logout.php");
        httpXMLObj.send();
    } // end logout()
}; // end window.onload()