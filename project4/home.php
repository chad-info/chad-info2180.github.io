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
            <strong><?php echo $_SESSION["username"]; ?></strong>
            <a id="logoutButton">Log Out</a>
        </p>
        <div id="inboxDiv">Go to Inbox</span></div>
        <br><div id="message_list"></div>
        <br><div id="compose">Compose New Message!</div>
        <br><div id="composeSection"></div>
    </body>
</html>