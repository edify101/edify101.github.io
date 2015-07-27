---
layout: default
title: login
permalink: /registration/
---
<!--registration--> 
<!--<!DOCTYPE html>-->
<!--<html>-->
<!--<head>-->
<!--<title>Registration form</title>-->
<!--<style>-->
<!--</style>-->
<!--</head>-->
<!--<body>-->
<!--<form name="registration" method="post" action="registration.php">-->
<!-- we will create registration.php after registration.html -->
<!--EMAIL-ID:<input type="text" name="email" value=""></br>-->
<!--PASSWORD:<input type="text" name="password" value=""></br>-->
<!--RE-PASSWORD:<input type="text" name="repassword" value=""></br>-->
<!--First name:<input type = "text" name = "first_name" value = ""></br>-->
<!--Last name: <input type = "text" name = "last_name" value = ""></br>-->
<!--City: <input type = "text" name = "city" value = ""></br>-->
<!--Zipcode: <input type = "text" name = "zipcode" value = ""></br>-->
<!--Age: <input type = "text" name = "age" value = ""></br>-->
<!--<input type="submit" name="submit" value="submit">-->
<!--</form>-->
<!--ai ya-->
<!--</body>-->
<!--</html>-->
<html>

	<head>
		<meta charset="utf-8"/>
		<title>Tutorial: Super Simple Registration System With PHP &amp; MySQL</title>

		<!-- The main CSS file -->
		<link href="assets/css/style.css" rel="stylesheet" />

		<!--[if lt IE 9]>
			<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
		<script><input type="button" onclick="location.href='http://edify101.org/emailconf';" value="Register" />
		</script>
		<style>
		<a href="http://edify101.org/emailconf" class="button">Register</a>
		a.button {
    webkit-appearance: button;
    moz-appearance: button;
    appearance: button;

    text-decoration: none;
    color: initial;
}
</style>
	</head>

	<body>

		<form id="login-register" method="post" action="registration.md">

			<h1>Register</h1>
			<input type="text" placeholder="your@email.com" name="email" autofocus />
			<p>Enter your email address above and we will send <br />you a login link.</p>
			<form action="http://edify101.org/emailconf">
    <input type="submit" value="Register">
</form>
			<span></span>

		</form>

		<!-- JavaScript Includes -->
		<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
		<script src="assets/js/script.js"></script>

	</body>
</html>
