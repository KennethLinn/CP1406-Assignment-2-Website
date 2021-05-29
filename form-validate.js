function validateForm()  {
    var f = document.getElementById("fname").value;
    var l = document.getElementById("lname").value;
    var u = document.getElementById("username").value;
    var e = document.getElementById("email").value;
    var pw = document.getElementById("password").value;
    var b = document.getElementById("birthday").value;
    var p = document.getElementById("product").value;
    if(f == "") {
        alert("Please enter your first name, it should not be left blank !");
        return false;
    }
    if(l == "") {
        alert("Please enter your last name, it should not be left blank !");
        return false;
    }
    if(u == "") {
        alert("Please enter your username, it should not be left blank !")
    }
    if(e == "") {
        alert("Please enter you email !");
        return false;
    }
    if(pw = "") {
        alert("Please enter your password !");
        return false
    }
    var message = "Thank you for signing up for the Petite Treats Weekly newsletter" +
     "\nWe have added the following information to our files regarding your interests:" +
      "\nFirst Name: " + f +
      "\nLast Name: " + l +
      "\nUsername: " + u +
      "\nEmail: " + e +
      "\nProduct interests: " + p + 
      "\nBirthday: " + b ;

    alert(message);

    return true;
}