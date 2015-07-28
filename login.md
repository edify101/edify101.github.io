
---
layout: default
permalink: /login/
---
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="main.css">
<style>
<html>
<head>
<title>Login</title>
<style>
</style>
</head>
<body>
 <section class="container">
    <div class="login">
      <h1>Login to Web App</h1>
      <form method="post" action="index.html">
        <p><input type="text" name="login" value="" placeholder="Username or Email"></p>
        <p><input type="password" name="password" value="" placeholder="Password"></p>
        <p class="remember_me">
          <label>
            <input type="checkbox" name="remember_me" id="remember_me">
            Remember me on this computer
          </label>
        </p>
        <p class="submit"><input type="submit" name="commit" value="Login"></p>
      </form>
    </div>

    <div class="login-help">
      <p>Forgot your password? <a href="registration.md">Click here to reset it</a>.</p>
    </div>
  </section>

</body>
</html>
