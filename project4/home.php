<?php
    session_start();
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Cheapo Mail</title>
        <script type="text/javascript" src="function.js"></script>
        <link rel="stylesheet" href="design.css" type="text/css" />
    </head>
    <body>
        <p>
            Hello, Cheapo! Hello, 
            <strong><?php echo $_SESSION["username"]; ?></strong>
        </p>
        <div id="inboxDiv">Your Inbox</span></div>
        <div id="message_list">You currently have no Messages in your Inbox...</div>
        <br><a href="message.php">Compose and Send Message!</a>
        <br><br><button id="logoutButton">Logout</button>
    </body>
</html>