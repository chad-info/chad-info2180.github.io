<?php
    include("connect.php");
    
    $from = $_POST["poster"];
    session_start();
    
    //Add a User
    function add_user($db){
        //Check that Admin is logged in
        $query = $db->prepare("SELECT id FROM Admin WHERE admin_name=?");
        $query->bind_param("s",$_SESSION["username"]);
        $query->execute();
        
        $values = $query->get_result();
        
        $result = $values->fetch_array(MYSQLI_NUM);
        
        if (count($result) === 0){
            exit("You must log in as a Admin");
        }
        
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
        //Array of Recipients
        $recips = $_POST["recipients"];
        
        //Get User Id from logged in user
        $query = $db->prepare("SELECT id FROM User WHERE username=?");
        $query->bind_param("s",$_SESSION["username"]);
        $query->execute();
        $value = $query->get_result();
        
        while ($answer = $value->fetch_array(MYSQLI_NUM)){
            foreach ($answer as $id){
                $userId = $id;
            }
        }
        
        //Get Recipients from comma separated list
        $recipients = explode(',',$recips);
        
        
        $sql = $db->prepare("INSERT Message (body,subject,user_id,recipient_id) VALUES (?,?,?,?)");
        $sql->bind_param("ssii",$body,$subject,$userId,$recipientId);
        
        foreach($recipients as $recipient){
            //Construct SQL statment
            $subject = $_POST["subject"];
            $body = $_POST["body"];
            
            //Get Recipients ID from their names
            $nameQ = $db->prepare("SELECT id FROM User WHERE first_name=?");
            $nameQ->bind_param("s",$recipient);
            $nameQ->execute();
            $result = $nameQ->get_result();
            
            while ($vals = $result->fetch_array(MYSQLI_NUM)){
                foreach($vals as $r_id){
                    $recipientId = $r_id;
                }
            }
            
            //Insert into Message table
            $sql->execute();
        }
        
        //Close SQL statement
        $query->close();
        $sql->close();
    }
    
    //Mark a message as Read
    function read($db){
        //To Do...
    }
    
    //Login Cheapo User
    function login($db){
        $username = $_POST["username"];
        $password = $_POST["password"];
        
        $sql = $db->prepare("SELECT username FROM User WHERE username=? AND password=?");
        $sql->bind_param("ss",$username,$password);
        $sql->execute();
        
        $value = $sql->get_result();
        
        while ($item = $value->fetch_array(MYSQLI_NUM)){
            foreach ($item as $user){
                $_SESSION["username"] = $user;
            }
        }
        
        header("Location: home.php");
    }
    
    //Logout Cheapo User
    function logout(){
        session_unset();
        session_destroy();
    }
    
    //Choose Which function based on form to execute
    if ($from === "create_user"){
        add_user($db);
    }elseif ($from === "send_message"){
        send_message($db);
    }elseif ($from === "login"){
        login($db);
    }
    
    $db->close();
?>