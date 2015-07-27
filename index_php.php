try{

	if(!empty($_POST) && isset($_SERVER['HTTP_X_REQUESTED_WITH'])){

		// Output a JSON header

		header('Content-type: application/json');

		// Is the email address valid?

		if(!isset($_POST['email']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
			throw new Exception('Please enter a valid email.');
		}

		// This will throw an exception if the person is above 
		// the allowed login attempt limits (see functions.php for more):
		rate_limit($_SERVER['REMOTE_ADDR']);

		// Record this login attempt
		rate_limit_tick($_SERVER['REMOTE_ADDR'], $_POST['email']);

		// Send the message to the user

		$message = '';
		$email = $_POST['email'];
		$subject = 'Your Login Link';

		if(!User::exists($email)){
			$subject = "Thank You For Registering!";
			$message = "Thank you for registering at our site!\n\n";
		}

		// Attempt to login or register the person
		$user = User::loginOrRegister($_POST['email']);

		$message.= "You can login from this URL:\n";
		$message.= get_page_url()."?tkn=".$user->generateToken()."\n\n";

		$message.= "The link is going expire automatically after 10 minutes.";

		$result = send_email($fromEmail, $_POST['email'], $subject, $message);

		if(!$result){
			throw new Exception("There was an error sending your email. Please try again.");
		}

		die(json_encode(array(
			'message' => 'Thank you! We\'ve sent a link to your inbox. Check your spam folder as well.'
		)));
	}
}
catch(Exception $e){

	die(json_encode(array(
		'error'=>1,
		'message' => $e->getMessage()
	)));
}

if(isset($_GET['tkn'])){

	// Is this a valid login token?
	$user = User::findByToken($_GET['tkn']);

	if($user){

		// Yes! Login the user and redirect to the protected page.

		$user->login();
		redirect('protected.php');
	}

	// Invalid token. Redirect back to the login form.
	redirect('index.php');
}

if(isset($_GET['logout'])){

	$user = new User();

	if($user->loggedIn()){
		$user->logout();
	}

	redirect('index.php');
}

$user = new User();

if($user->loggedIn()){
	redirect('protected.php');
}
