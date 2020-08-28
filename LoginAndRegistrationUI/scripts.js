function validation(){
    var username = document.getElementsByName('username')[0].value;
    var email = document.getElementsByName('useremail')[0].value;
    var pswd = document.getElementsByName('userpassword')[0].value;

    var usernamecheck = /^[A-za-z.]{3,30}$/;
    var userpswdcheck = /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?=.*[+@#$%^&*!.()-]).{8,}/;
    var emailcheck = /^[a-zA-Z0-9]{1,}[._+-]?[a-zA-Z0-9]{1,}[@][a-zA-Z0-9]{1,}([.][a-zA-Z]{2,4}){1,3}$/;
    
    var counter=0;
    if(usernamecheck.test(username)){
        document.getElementById('nameerror').innerHTML = "";
    }else{
        counter++;
        document.getElementById('nameerror').innerHTML = "Username is invalid";
    }

    if(emailcheck.test(email)){
        document.getElementById('emailerror').innerHTML = "";
    }else{
        counter++;
        document.getElementById('emailerror').innerHTML = "Email is invalid";
    }

    if(userpswdcheck.test(pswd)){
        document.getElementById('passworderror').innerHTML = "";
    }else{
        counter++;
        document.getElementById('passworderror').innerHTML = "Password is invalid";
    }
    if(counter > 0)
    {
        return false;
    }
    alert("Form Successfully Submitted");
    location.reload();
}

function togglePass(){ 
    (pwd.type == 'password') ? pwd.type = 'text' : 
    pwd.type = 'password';
    eye.classList.toggle('active');       
}

function disableButton(){
    if((document.getElementsByName('username')[0].value != "")){
        if((document.getElementsByName('pwd')[0].value != "")){
            document.getElementsByName('button')[0].disabled = false;
        }                   
    }
    else{
        document.getElementsByName("button")[0].disabled = true;
    }
}