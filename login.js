 
 
 let data=JSON.parse(localStorage.getItem("Signupdata")) ||[]
 console.log(data)
 document.getElementById("signin").addEventListener("click",login);


 function login(){
    event.preventDefault();

    let email=document.getElementById("email").value
    let password=document.getElementById("password").value


    let flag=false;
   for(let i=0;i<data.length;i++){
    let char=data[i]
    if(char.email==email && char.password==password){
        flag=true;
    }
   }
   if(flag==true){
   window.location.href="navbar.html"
   }else{
    alert("Enter correct details")
   }

 }