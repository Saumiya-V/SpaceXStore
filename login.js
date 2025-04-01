const users={
    "saumiya477@gmail.com": "saumiya@26",
    "test@mail.com": "mypassword"
}

document.getElementById("myform").addEventListener('submit',e=>{
  e.preventDefault();

  const email=document.getElementById("email").value.trim()
  const password=document.getElementById("password").value.trim()
  let valid=true;

  document.getElementById("emailError").innerText=""
  document.getElementById("passwordError").innerText=""
  document.getElementById("loginError").innerText=""

  const emailReg=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailReg.test(email)){
    document.getElementById("emailError").innerText="Invalid email format";
    valid=false
  }

  if(password.length < 8){
    document.getElementById("passwordError").innerText="Password must be atleat 8 characters";
    valid=false;
  }

  if(valid){
    if(users[email] && users[email]===password){
      alert('Login Successful')
    }
    else if(!users[email]){
       document.getElementById("loginError").innerText="Username not registered"
    }
    else {
      document.getElementById("loginError").innerText = "Incorrect password";
  }
  }
})


