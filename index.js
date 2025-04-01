const form =document.getElementById("myform")
const firstName=document.getElementById("fname")
const lastName=document.getElementById("lname")
const email=document.getElementById("email")
const password=document.getElementById("pwd")

form.addEventListener('submit',e=>{
  e.preventDefault();

  validateInputs();
})

const setError=(element,message)=>{
 const inputControl=element.parentElement;
 const errorDisplay=inputControl.querySelector('.error')

 errorDisplay.innerText=message;
 inputControl.classList.add('error')
 inputControl.classList.remove('success')
}
const setSuccess=(element)=>{
  const inputControl=element.parentElement;
  const errorDisplay=inputControl.querySelector('.error')
 
  errorDisplay.innerText='';
  inputControl.classList.add('success')
  inputControl.classList.remove('error')
 }

 const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs=()=>{
  const fnameValue=fisrtName.value.trim();
  const lnameValue=lastName.value.trim();
  const emailValue=email.value.trim();
  const pwdValue=pwd.value.trim();


  if(fnameValue===''){
     setError(firstName,"First name is required")
  }
  else{
     setSuccess(firstName)
  }

  if(lnameValue===''){
    setError(lastName,"Last name is required")
 }
 else{
    setSuccess(lastName)
 }

 if(emailValue===''){
  setError(email,"Email is required")
}
else if(isValidEmail(email)){
     setError(email,"Provide a valid email address")
}
else{
  setSuccess(email)
}
if(pwdValue===''){
  setError(password,"Password is required")
}
else if(pwdValue.length < 8){
    setError(password,"Password must be atleast 8 character")
}
else{
  setSuccess(password)
}
}