const userName = "Shubhamt11";
const Password = "9869603401";

function Login() {
if(document.getElementById('user').value === userName & document.getElementById('pass').value === Password){
    alert('Login Successful');
}
else{
        alert('Login Failed');
    }
}
