let imagenes = [
    {


        "url": "img/orcas.webp",
        "nombre": "proyecto 01",
        "descripcion": "este es solo prueba 5"
    
        },
    {


    "url": "img/lobos.webp",
    "nombre": "proyecto 02",
    "descripcion": "este es solo prueba 5"

    },
    {


    "url": "img/orangutan1.webp",
    "nombre": "proyecto 03",
    "descripcion": "este es solo prueba 4"
    },
    {

    "url": "img/osos.webp",
    "nombre": "proyecto 04",
    "descripcion": "este es solo prueba 3"

    },
    
    
]


let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto');
let actual = 0

posicionCarrusel()

atras.addEventListener('click',function(){
    actual -=1
    if (actual == -1){
        actual = imagenes.length -  1
    }

    imagen.innerHTML =  `<img class="img" src="${imagenes[actual].url}" alt="logo pagina"  loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>`   

    posicionCarrusel()
})


adelante.addEventListener('click',function(){
    actual +=1
    if (actual ==  imagenes.length){
        actual = 0
    }

    imagen.innerHTML =  `<img class="img" src="${imagenes[actual].url}" alt="logo pagina"  loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>`  

    posicionCarrusel()
})



function posicionCarrusel(){
    puntos.innerHTML = ""
    for (let i = 0; i < imagenes.length; i++) {
        if(i == actual){
            puntos.innerHTML += `<p class= "bold">.</p>`
        }
        else{
            puntos.innerHTML += `<p>.</p>`
        }
        
        
    }
}

