let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
email = form.email.value;
password = form.password.value;

fetch("http://localhost:3000/users")
.then((res)=>res.json())
.then((Data)=>{
    const existingUser = Data.find((el) => el.email === email);
    if(existingUser){
        alert("users already exist");
      }
      else{
        alert("user not found")
      }
}


)
.catch((err)=>{
    console.log(err)
})

})
