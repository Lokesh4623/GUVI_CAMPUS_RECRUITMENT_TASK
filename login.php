<?php
// Connect to MySQL database

$conn = mysqli_connect("localhost","root","","test");
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Get form data
$email = $_POST['email'];
$password = $_POST['password'];

// Validate user
$sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) 
{
    echo "Login successful.";
} 
else
{
    echo "Invalid email or password.";
}

mysqli_close($conn);
?>
