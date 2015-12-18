<?php
    include("connect.php");
    session_start();
    
    $query = $db->prepare("SELECT id FROM User WHERE username=?");
    $query->bind_param("s",$_SESSION["username"]);
    $query->execute();
    
    $vals = $query->get_result();
    
    while($ids = $vals->fetch_array(MYSQLI_NUM)){
        foreach($ids as $id){
            $user_id = $id;
            $testuser_id = $id;
        }
    }
    
    $query->close();
    
    $testsql = $db->prepare("SELECT body FROM Message WHERE recipient_id=?");
    $testsql->bind_param("i",$testuser_id);
    $testsql->execute();
    
    $testvalues = $testsql->get_result();
    $testresults = $testvalues->fetch_array(MYSQLI_NUM);
    
    if (count($testresults) < 1){
        exit("You currently have no messages in your inbox");
        $testresults->close();
    }else{
        $sql = $db->prepare("SELECT body FROM Message WHERE recipient_id=?");
        $sql->bind_param("i",$user_id);
        $sql->execute();
        
        $values = $sql->get_result();
        
        while($bodies = $values->fetch_array(MYSQLI_NUM)){
            foreach($bodies as $body){
                echo $body . "<br>";
            }
        }
    }
    
    $sql->close();
    
    $db->close();
?>