const signup = document.getElementById("hola");
signup.addEventListener('submit', (e)=>{
    e.preventDefault()
    const name = document.getElementById("nombre+apellido").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const user = JSON.parse(localStorage.getItem("users")) || []
    const userRegistro = user.find(user => user.email === email)
    if (userRegistro) {
        return alert("ya estas registrado puto")
    }
    user.push({name: name , email: email, password: password})
    localStorage.setItem("User" , JSON.stringify(user))
    alert("registro exitoso")
    

})