<html>
<head>
<title>REGISTRATION PAGE VALIDATION</title>
<script language="javascript">
// code for username validation

function UnameValidation(){
var fname=regform.fname.value; 
var splchar = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?~";
if(fname.length<6){
alert("first name must have atleast 6 characters");
}
if(fname!=""&& fname.length>=6){
for (var i=0;i<fname.length;i++){
if(splchar.indexOf(fname.charAt(i)) != -1){
alert ("Userid should not have any special characters");
}
}
}
}


// code for password validation

function pwdvalidation(){
var pw=regform.pwd.value; 
var cpw=regform.cpwd.value; 
if(pw.length<6)
{
alert("PASSWORD MUST CONTAIN 6 CHARACTERS");
}
if(pw!=cpw)
{
alert("PASSWORD DOES NOT  MATCH");
}
else if(pw.length>=6)
alert("PASSWORD VALIDATION HAS BEEN SUCCESSFUL");
}
//code for email validation
function emailvalidation(){
var emailid=regform.email.value;
if(emailid.indexOf('@')==-1)
{
alert("invalid");
}
else if((emailid.indexOf('@')==0)||(emailid.indexOf('.')==0)||(emailid.indexOf('@'))>(emailid.indexOf('.')))
{
alert("Given email id is invalid"); 
}
else
alert("Given email id is valid");
}
// code for phone number validation
function phnovalidation(){
var ph=regform.phno.value;
if(ph.length==10)
{
if(isNaN(ph))
alert("It is not a valid Phone number");
else
alert("It is a valid Phone number");
}
else
alert("Please enter a valid phone number");
}
</script>

</head>
<body bgcolor="pink">
<center><h2 align="center">ONLINE REGISTRATION PAGE</h2><br>
<form name="regform" action="Login.html" method="post">
<h3>
First name:<input type="text" maxlength="20" size="25" name="fname" onblur="UnameValidation()"><br><br>
Last name:<input type="text" maxlength="20" size="25" name="lname"><br/><br>
PassWord:<input type="PassWord" maxlength="20" size="25" name="pwd"></br><br>
Confirm PassWord:<input type="PassWord" maxlength="20" size="25" name="cpwd" onblur="pwdvalidation()"><br><br>
Gender:<input type="radio" name="gender" value="male" /> Male<br/>
<input type="radio" name="gender" value="female"/> Female<br/><br>
Email-ID:<input type="text" maxlength="40" size="35" name="email" onblur="emailvalidation()"><br/><br>
Phone number:<input type="text" maxlength="10" size="25" name="phno" onblur="phnovalidation()"><br/><br>
<input type="submit" value="SUBMIT">
<input type="reset" value="RESET">
</h3></center></form>
</body>
</html>