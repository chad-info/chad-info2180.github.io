<?php
    include("connect.php");
    session_start();
    
    if ($_SESSION["username"] === NULL){
        exit();
    }else{
        $query = $db->prepare("SELECT id FROM User WHERE username=?");
        $query->bind_param("s",$_SESSION["username"]);
        $query->execute();
        
        $vals = $query->get_result();
        
        while($ids = $vals->fetch_array(MYSQLI_NUM)){
            foreach($ids as $id){
                $user_id = $id;
            }
        }
        
        $sql = $db->prepare("SELECT id FROM Message WHERE recipient_id=?");
        $sql->bind_param("i",$user_id);
        $sql->execute();
        
        $values = $sql->get_result();
        
        while($bodies = $values->fetch_assoc()){
            $mark = $db->prepare("INSERT IGNORE INTO Message_read (message_id,reader_id) VALUES (?,?)");
            $mark->bind_param("ii",$bodies["id"],$user_id);
            $mark->execute();
        } //end while
    } //end main if
?>