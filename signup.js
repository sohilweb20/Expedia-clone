form=document.getElementById("form").addEventListener("submit",signup);
   let Arr=JSON.parse(localStorage.getItem("Signupdata")) ||[]
   
   
function signup(){
    event.preventDefault();
    

  let obj={
    email:document.querySelector("#email").value,
    name:document.querySelector("#name").value,
    name2:document.querySelector("#name2").value,
    password:document.querySelector("#password").value

  }
  Arr.push(obj)
  localStorage.setItem("Signupdata",JSON.stringify(Arr))
}
