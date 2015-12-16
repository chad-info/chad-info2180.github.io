<?php
    include("connect.php");
    
    $from = $_POST["poster"];
    
    //Add a User
    function add_user($db){
        $first_name = $_POST["first_name"];
        $last_name = $_POST["last_name"];
        $password = $_POST["password"];
        $username = $_POST["username"];
        
        $sql = $db->prepare("INSERT User (first_name,last_name,password,username) VALUES (?,?,?,?)");
        $sql->bind_param("ssss",$first_name,$last_name,$password,$username);
        $sql->execute();
        
        echo "Inserted Successfully";
        
        $sql->close(); //Close insert SQL statement
    }
    
    //Send a message to a user
    function send_message($db){
        $subject = $_POST["subject"];
        $recips = $_POST["recipients"];
        $body = $_POST["body"];
        
        $recipients = explode(',',$recips);
        
        foreach($recipients as $recipient){
            //Construct SQL statment
            //Insert into Message table
            //Close SQL statement
        }
    }
    
    //Mark a message as Read
    function read($db){
        //To Do...
    }
    
    //Login Cheapo User
    function login($db){
        //To Do...
    }
    
    //Logout Cheapo User
    function logout($db){
        //To Do...
    }
    
    if ($from === "create_user"){
        add_user($db);
    }elseif ($from === "send_message"){
        send_message($db);
    }
    
    $db->close();
?>