function saveUserData() {  
  let name = document.getElementById("name").value;  
  let address = document.getElementById("address").value;  
  let email = document.getElementById("email").value;  
  let phone = document.getElementById("phone").value;  
  let addlink = document.getElementById("add-link").value;  

  localStorage.setItem("name", name);  
  localStorage.setItem("address", address);  
  localStorage.setItem("email", email);  
  localStorage.setItem("phone", phone);  
  localStorage.setItem("addlink", addlink);  
}  
