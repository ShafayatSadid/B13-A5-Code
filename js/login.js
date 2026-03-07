// btn even listener
document.getElementById('signIn').addEventListener('click', function(){

    // get username and validation
    const username = getValue('username');
    if(username !== 'admin'){
        alert('invalid username');
        return;
    }

    // get password and validation
    const password = getValue('password');
    if(password !== 'admin123'){
        alert('wrong password');
        return;
    }

    // if all is okay
    alert('Login Successfully')
    // Go to homepage
    window.location.assign("home.html");
    
})
