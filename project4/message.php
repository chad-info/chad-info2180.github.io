<?php
    session_start();
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Cheapo Mail - Send Message</title>
        <script type="text/javascript" src="function.js"></script>
        <link rel="stylesheet" href="design.css" type="text/css" />
    </head>
    <body>
        You are logged in as: <strong><?php echo $_SESSION["username"]; ?></strong>
        <h3>Compose a Message!</h3>
        <form action="server.php" method="post">
            Subject: <br/><input type="text" name="subject"/><br/>
            Recipients: <br/><input type="text" name="recipients"/><br/>
            Body: <br/><textarea name="body" rows="5" cols="50"></textarea><br/>
            <input type="hidden" name="poster" value="send_message"/>
            <a href="home.php">Cancle</a>
            <input type="submit" value="Send Message!"/>
        </form>
    </body>
</html>