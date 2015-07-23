---
layout: default
title: login
permalink: /login/
---
<html>
<head>
<title>Registration form</title>
<style>
</style>
</head>
<body>
<form name="registration" method="post" action="registration.php">
<!-- we will create registration.php after registration.html -->
EMAIL-ID:<input type="text" name="email" value=""></br>
PASSWORD:<input type="text" name="password" value=""></br>
RE-PASSWORD:<input type="text" name="repassword" value=""></br>
First name:<input type = "text" name = "first_name" value = ""></br>
Last name: <input type = "text" name = "last_name" value = ""></br>
City: <input type = "text" name = "city" value = ""></br>
Zipcode: <input type = "text" name = "zipcode" value = ""></br>
Age: <input type = "text" name = "age" value = ""></br>
<input type="submit" name="submit" value="submit">
</form>

</body>
</html>
