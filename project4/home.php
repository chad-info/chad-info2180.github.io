<?php
    session_start();
?>
<!DOCTYPE html>
<html id="home_html">
    <head>
        <title>Cheapo Mail</title>
        <script type="text/javascript" src="function.js"></script>
        <link rel="stylesheet" href="design.css" type="text/css" />
    </head>
    <body id="home_body">
        <p>
            Hello, Cheapo! Hello, 
            <strong id="user_name_section">
                <?php
                    if ($_SESSION["username"] === NULL){
                        echo "";
                    }else{
                        echo $_SESSION["username"];
                    }
                ?>
            </strong>
            <div id="logButton">
                <?php
                    if ($_SESSION["username"] === NULL){
                        echo "Log In";
                    }else{
                        echo "Log Out";
                    }
                ?>
            </div>
            <br><div id="loginSection"></div>
        </p>
        <div id="inboxDiv">Open Inbox</span></div>
        <br><div id="message_list"></div>
        <br><div id="compose">Compose New Message!</div>
        <br><div id="composeSection"></div>
    </body>
</html>