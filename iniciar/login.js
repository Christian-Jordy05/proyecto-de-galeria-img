const loginForm = document.getElementById("loginForm")
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const email = document.getElementById("emailLO").value
    const password = document.getElementById("passwordLO").value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(user => user.email === email && user.password === password)
    if(!validUser){
        return alert('Usuario y/o contraseña incorrectos!')
    }
    alert(`Bienvenido ${validUser.name}`)
    localStorage.setItem('login_success', JSON.stringify(validUser))
    window.location.href = '/proyecto-de-galeria-img/carrusel.html'   

})