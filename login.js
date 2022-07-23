 
 
 let data=JSON.parse(localStorage.getItem("Signupdata")) ||[]
 console.log(data)
 document.getElementById("signin").addEventListener("click",login);


 function login(event){
    event.preventDefault();
       let obj={
         email:document.getElementById("email").value,
        password:document.getElementById("password").value
       }
       console.log(obj)

 
     data.forEach(function(elem){
        if(elem.email==obj.email && elem.password==obj.password){
          localStorage.setItem("logindata",JSON.stringify(elem))
          alert("Login successfully")
          window.location.href="navbar.html"
        }
    })


   

 }