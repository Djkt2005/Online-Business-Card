
let btn_option = document.getElementById("dot_btn")
let c=0;
btn_option.addEventListener("click",()=>{
   let form_display =  document.getElementById('form_container')
   if(c==0){
        c^1;
       btn_option.classList.toggle("ani");
   }else{
    c^1;
    btn_option.classList.toggle("deani");
   }
   if (form_display.style.display === "none") {
    form_display.style.display = "block";
  } else {
    form_display.style.display = "none";
  }
})