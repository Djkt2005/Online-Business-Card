let dd = document.getElementById("dropdown");
let bar = document.getElementById('slide');  

function myFunction(x) {  
  x.classList.toggle("change");  

  if (dd.style.display === "block") {  
    dd.style.opacity = 1;  
    dd.style.transform = "translateY(0px)";  
    setTimeout(() => {  
      dd.style.display = "none"; 
    }, 400);
  } else {  
    dd.style.display = "block";  
    dd.style.opacity = 0;  
    dd.style.transform = "translateY(-10px)";

    dd.offsetHeight;

    dd.style.transition = 'opacity 0.4s ease, transform 0.4s ease';  
    dd.style.opacity = 1;  
    dd.style.transform = "translateY(0px)";  
  }  
}  

dd.style.display = 'none';  
dd.style.transition = 'opacity 0.4s ease, transform 0.4s ease';