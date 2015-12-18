window.onload = function(){
    
    //Load Inbox
    document.getElementById("inboxDiv").addEventListener("click",function() {
        var msg_list = document.getElementById("message_list").innerHTML;
        
        if (msg_list === ""){
            message_list();
            this.innerHTML = "Close Inbox";
        }else{
            empty("message_list");
            this.innerHTML = "Go to Inbox";
        }
    });
    
    //Log Out User
    document.getElementById("logoutButton").addEventListener("click",function() {
        logout();
    });
    
    //Compose a message
    document.getElementById("compose").addEventListener("click",function() {
        var cpsSec = document.getElementById("composeSection").innerHTML;
        
        if (cpsSec === ""){
            compose();
            document.getElementById("compose").innerHTML = "Close Composition"
        }else{
            empty("composeSection");
            document.getElementById("compose").innerHTML = "Compose New Message!"
        }
        
    });
    
    //Send message
    document.getElementById("send_message_button").addEventListener("click",function() {
        //send_message();
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
                    document.getElementById("composeSection").innerHTML = "Error: Unable to load compose instance :(";
                }
            }
        } // end anon function()
        
        httpXMLObj.open("GET", "message.html");
        httpXMLObj.send();
    } //end compose()
    
    function send_message(){
        alert("Hey");
    }
        /*var httpXMLObj = new XMLHttpRequest();
        
        var subject = document.getElementById("subject").value;
        var recipients = document.getElementById("recipients").value;
        var body = document.getElementById("body").value;
        var poster = document.getElementById("poster").value;
        
        var data = "subject" + encodeURIComponent(subject) 
        + "recipients" + encodeURIComponent(recipients) 
        + "body" + encodeURIComponent(body) 
        + "poster" + encodeURIComponent(poster);
        
        alert(data);
        /*
        if (!httpXMLObj){
            alert("Unable to create XMLHttpRequest Object");
            return false;
        }
        
        httpXMLObj.open("POST", "server.php");
        httpXMLObj.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        httpXMLObj.send();
    }*/
    
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
    
    //Log Out user
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
}; // end window.onload()