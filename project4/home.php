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
        <p>Hello, Cheapo!</p>
        You are logged in as: <strong><?php echo $_SESSION["username"]; ?></strong>
        <div id="inboxDiv">Your Inbox</div>
        <br><button id="send_new_message">Compose a Message!</button>
        <br><br><button id="logoutButton">Logout!</button>
    </body>
</html>