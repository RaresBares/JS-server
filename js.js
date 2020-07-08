function send(){

if(document.getElementById("password").value == document.getElementById("conpass").value){


var http = new XMLHttpRequest();
http.open("POST", "http://127.0.0.1:2003/register", true);
http.setRequestHeader("Accept-Language", "en-US,en;q=0.9,de-DE;q=0.8,de;q=0.7,ro;q=0.6");
http.send( "{\"username\": \"" + document.getElementById("username").value + "\", \"email\": \"" + document.getElementById("email").value + "\", \"password\": \"" + document.getElementById("password").value + "\", \"end\": \"true\"}");

http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            if(this.responseText == "good"){
 window.location = 'http://127.0.0.1/register/confirmation/?email=' + document.getElementById("email").value;
}else if(this.responseText == "eexists"){
   window.location = 'http://www.google.com/';
}else if(this.responseText == "uexists"){
   window.location = 'http://www.google.com/';
}
       }
    };

document.getElementById("return").innerHTML = "<p>Dir wurde eine Email geschickt</p>";
}else{
 document.getElementById("return").innerHTML = "<p>Die Passwörter stimmen nicht</p>";
}
}//g
