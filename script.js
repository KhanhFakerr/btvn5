$ = function(_id){
    return document.getElementById(_id);
  }
  checkEmail = function(v){
      let reg = /^[a-z][0,9]\@\.$/;
          return reg.test(v);
  }
  checkPass = function(v){
      let reg = /^([a-z]|[0,9]|[a-z][0,9]){6,}$/;
          return reg.test(v);
  }

  var btn = $("login");
  document.getElementById("eml").setAttribute("placeholder","Email or username");
  document.getElementById("psw").setAttribute("placeholder","Enter password");
  btn.addEventListener("click", function(){
    let email = $("eml");
    let password = $("psw");
    let passw = $("pass");
    let emil = $("emi");
    if(email.value.length==0){
      email.setAttribute("placeholder","Email must not be blank");
      email.classList.add("error");
      email.classList.add("error_e");
      // email.setAttribute("style", "border: 1px solid red");
    }
    if(password.value.length==0){
      password.setAttribute("placeholder","Password must not be blank");
      password.classList.add("error");
      password.classList.add("error_e");
      // password.setAttribute("style", "border: 1px solid red");
    }
    if(!checkEmail(email.value)){
      email.classList.remove("error_e");
      emil.innerText = "Email is invalid";
      emil.classList.add("mess_error");
    }else{
      email.classList.remove("error_e");
      emil.innerText = "Valid";
      emil.classList.add("messi_error");
    }
    if(!checkPass(password.value)){
      password.classList.remove("error_e");
      // password.classList.add("error");
      passw.innerText = "Password is incorrect/Password must be more than 6 characters";
      passw.classList.add("mess_error");
    }else{
      password.classList.remove("error_e");
      passw.innerText = "Correct";
      passw.classList.add("messi_error");
    }
  })

