function logIn(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let error = document.getElementById('error');

    if(username === "" && password ===""){
        document.getElementById('error').textContent = 'Please enter Username and Password';
    }
    else{
        if(username === 'username' && password === "password"){
        window.location.href = "index.html";
        }else{
            error.style.visibility = 'visible';
            document.getElementById('error').textContent = 'Incorrect Username or Password';
        }
    }
}
    