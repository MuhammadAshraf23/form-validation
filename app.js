const loginForm=document.getElementById("login-form")
const signupForm=document.getElementById("signup-form")
function togglefrom(){
    loginForm.style.display=loginForm.style.display==='none'? 'block':'none';
    signupForm.style.display=signupForm.style.display==='none'? 'block':'none';
}


function signUp() {
    let userName = document.getElementById("signup-name").value
    let userEmail = document.getElementById("signup-email").value
    let userPass1 = document.getElementById("signup-password").value
    localStorage.setItem('userName', userName)
    localStorage.setItem('userEmail', userEmail)
    localStorage.setItem('userPass1', userPass1)
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
}
function signIn() {
    let userEmail = document.getElementById("login-email").value
    let userPass1 = document.getElementById("login-password").value
    let getEmail = localStorage.getItem('userEmail')
    let getPass = localStorage.getItem('userPass1')
    if (userEmail == getEmail && userPass1 == getPass) {
        location.replace("welcome.html");
     
    }
    else {
        alert("Enter Correct user or password")
    }

}