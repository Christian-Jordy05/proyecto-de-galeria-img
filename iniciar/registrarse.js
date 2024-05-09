// const signup = document.getElementById("signupForm");
// signup.addEventListener('submit', (e)=>{
//     e.preventDefault()
//     const name = document.getElementById("name").value
//     const email = document.getElementById("email").value
//     const password = document.getElementById("password").value

//     const user = JSON.parse(localStorage.getItem("users")) || []
//     const userRegistro = user.find(user => user.email === email)
//     if (userRegistro) {
//         return alert("ya estas registrado puto")
//     }
//     user.push({name: name , email: email, password: password})
//     localStorage.setItem("user" , JSON.stringify(user))
//     alert("registro exitoso")
    

// })

const signupForm = document.querySelector('#signupForm')
signupForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.email === email)
    if(isUserRegistered){
        return alert('El usuario ya esta registado!')
    }

    Users.push({name: name, email: email, password: password})
    localStorage.setItem('users', JSON.stringify(Users))
    alert('Registro Exitoso!')
    window.location.href = '/proyecto-de-galeria-img/iniciar.html'

})