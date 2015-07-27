// To protect any php page on your site, include main.php
// and create a new User object. It's that simple!

require_once 'includes/main.php';

$user = new User();

if(!$user->loggedIn()){
	redirect('index.php');
}

echo 'Your email: '.$user->email;
echo 'Your rank: '.$user->rank();
