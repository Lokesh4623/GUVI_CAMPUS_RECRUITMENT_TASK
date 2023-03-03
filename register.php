<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $dob = $_POST['dob'];
    $gender = $_POST['gender'];
    $age = $_POST['age'];
    $phno = $_POST['phno'];

    //database connection
    $conn = new mysqli('localhost','root','','test');
    if($conn->connect_error)
    {
        die('connection failed:'.$conn->connect_error);
    }
    else
    {
            $result=mysqli_query($mysqli,"INSERT INTO users(name,email,password,dob,gender,age,phno) Values('$name','$email','$password','$dob','$gender','$age','$phno')");
            if($result)
            {
                echo "data inserted successfully";
            }
            else{
                echo "data not inserted!";
            }    
    }  
?>