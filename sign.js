let users = [];

function register() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let pas = document.getElementById("pas").value;
  if ((name == "") & (email == "") & (pas == "")) {
    alert("Vui lòng điền đầy đủ thông tin");
    return false;
  } else {
    if (pas.length < 6 || pas.length >= 20) {
      alert("Mật khẩu quá ngắn phải điền trên 6 ký tự");
      return false;
    } else {
      alert("Chúc mừng bạn đã điền đủ thông tin");
      // setTimeout(function() { location.href ="signin.html"}, 3000);
    }
  }
  let user = {
    name: name,
    email: email,
    password: pas,
  };
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
}

function checkEmailLogin(mail1, mail2) {
  if (mail1 != mail2) {
    return false;
  }
  return true;
}

function checkPasswordLogin(pw1, pw2) {
  if (pw1 != pw2) {
    return false;
  }
  return true;
}

function checkUser(mail, pw) {
  for (i = 0; i < users.length; i++) {
    if (mail == JSON.parse(localStorage.getItem("users"))[i].email) {
      let user = JSON.parse(localStorage.getItem("users"))[i];
      if (checkPasswordLogin(pw, user.password) == true) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}

function checkLogin(event) {
  let email_input = document.getElementById("email-input").value;
  let password_input = document.getElementById("pas-input").value;
  let usersStorage = JSON.parse(localStorage.getItem("users"));
  for (let i = 0; i < usersStorage.length; i++) {
    if (
      checkEmailLogin(email_input, usersStorage[i].email) == true &&
      checkPasswordLogin(password_input, usersStorage[i].password) == true
    ) {
      alert("login sucessfully");
      return;
    }
  }
  alert("wrong user email or password");
  event.preventDefault();
}
