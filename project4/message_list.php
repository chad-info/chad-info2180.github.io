<!DOCTYPE html>
<html>
    <head>
        
    </head>
    <body>
        <?php
            include("connect.php");
            session_start();
            
            if ($_SESSION["username"] === NULL){
                exit("You need to be logged in");
            }
            
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
                exit("You currently have no messages in your inbox...");
                $testresults->close();
            }else{
                $sql = $db->prepare("SELECT id,body,subject,user_id FROM Message WHERE recipient_id=?");
                $sql->bind_param("i",$user_id);
                $sql->execute();
                
                $values = $sql->get_result();
                
                while($bodies = $values->fetch_assoc()){
                    $get = "SELECT first_name FROM User WHERE id=" . $bodies["user_id"];
                    $response = $db->query($get);
                    
                    if ($response->num_rows > 0){
                        while($item = $response->fetch_assoc()){
                            $sender_name = $item["first_name"];
                        }
                    }
                    
                    $readql = $db->prepare("SELECT id,message_id FROM Message_read WHERE reader_id=? AND message_id=?");
                    $readql->bind_param("ii",$user_id,$bodies["id"]);
                    $readql->execute();
                    
                    $check = $readql->get_result();
                    
                    while($checked = $check->fetch_array(MYSQLI_NUM)){
                        if (count($checked) > 0){
                            $open = "READ";
                        }
                    }
                    
                    $readql->close();
                    
                    if ($open === "READ"){
                        echo "<span style='color:green; font-weight:bold; font-style:italic;'>READ</span><br>" 
                        . "Subject: " . $bodies["subject"] . "<br>"
                        . " From: " . $sender_name . "<br>"
                        . " Message: " . $bodies["body"]
                        . "<br><br>";
                    }else{
                        echo "<span style='color:blue; font-weight:bold; font-style:italic;'>NEW</span><br>" 
                        . "<strong>Subject:</strong> " . $bodies["subject"] . "<br>"
                        . " <strong>From:</strong> " . $sender_name . "<br>"
                        . " <strong>Message:</strong> " . $bodies["body"]
                        . "<br><br>";
                    }
                } //end while
            } //end if-else
            
            $sql->close();
            
            $db->close();
        ?>
    </body>
</html>