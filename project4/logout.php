<?php
    session_start();

    session_unset();
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Cheapo Mail - Login</title>
        <script type="text/javascript" src="function.js"></script>
        <link rel="stylesheet" href="design.css" type="text/css" />
    </head>
    <body>
        <form action="server.php" method="post">
            Username: <br/><input type="text" name="username" placeholder="'Jack Daw' or 'jackyD@jmail.com'"/><br/>
            Password: <br/><input type="password" name="password"/><br/>
            <input type="hidden" name="poster" value="login"/>
            <br><input id="loginButton" class="subbutton" type="submit" value="Login"/>
        </form>
    </body>
</html>