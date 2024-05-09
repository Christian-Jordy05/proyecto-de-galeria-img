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



/*-------------------------------segundo carru----------------------------------------------------*/

let imagenes2 = [
    {


        "url": "img/",
        "nombre": "proyecto 01",
        "descripcion": "este es solo prueba 5"
    
        },
        {

            "url": "img/",
            "nombre": "proyecto 04",
            "descripcion": "este es solo prueba 3"
        
            },
]

let atras2 = document.getElementById('atras2');
let adelante2 = document.getElementById('adelante2');
let imagen2 = document.getElementById('img2');
let puntos2 = document.getElementById('puntos2');
let texto2 = document.getElementById('texto2');
let actual2 = 0

posicionCarrusel2()

atras2.addEventListener('click',function(){
    actual2 -=1
    if (actual2 == -1){
        actual2 = imagenes2.length -  1
    }

    imagen2.innerHTML =  `<img class="img" src="${imagenes2[actual2].url}" alt="logo pagina"  loading="lazy"></img>`
    texto2.innerHTML = `
    <h3>${imagenes2[actual2].nombre}</h3>
    <p>${imagenes2[actual2].descripcion}</p>`   

    posicionCarrusel2()
})


adelante2.addEventListener('click',function(){
    actual2 +=1
    if (actual2 ==  imagenes2.length){
        actual2 = 0
    }

    imagen2.innerHTML =  `<img class="img" src="${imagenes2[actual2].url}" alt="logo pagina"  loading="lazy"></img>`
    texto2.innerHTML = `
    <h3>${imagenes2[actual2].nombre}</h3>
    <p>${imagenes2[actual2].descripcion}</p>`  

    posicionCarrusel2()
})



function posicionCarrusel2(){
    puntos2.innerHTML = ""
    for (let i = 0; i < imagenes2.length; i++) {
        if(i == actual2){
            puntos2.innerHTML += `<p class= "bold2">.</p>`
        }
        else{
            puntos2.innerHTML += `<p>.</p>`
        }
        
        
    }
}


/*-------------------------------tercer carru----------------------------------------------------*/

let imagenes3 = [
    {


        "url": "img/",
        "nombre": "proyecto 01",
        "descripcion": "este es solo prueba 5"
    
        },
        {

            "url": "img/",
            "nombre": "proyecto 04",
            "descripcion": "este es solo prueba 3"
        
            },
]

let atras3 = document.getElementById('atras3');
let adelante3 = document.getElementById('adelante3');
let imagen3 = document.getElementById('img3');
let puntos3 = document.getElementById('puntos3');
let texto3 = document.getElementById('texto3');
let actual3 = 0

posicionCarrusel3()

atras3.addEventListener('click',function(){
    actual3 -=1
    if (actual3 == -1){
        actual3 = imagenes3.length -  1
    }

    imagen3.innerHTML =  `<img class="img" src="${imagenes3[actual3].url}" alt="logo pagina"  loading="lazy"></img>`
    texto3.innerHTML = `
    <h3>${imagenes2[actual3].nombre}</h3>
    <p>${imagenes2[actual3].descripcion}</p>`   

    posicionCarrusel3()
})


adelante3.addEventListener('click',function(){
    actual3 +=1
    if (actual3 ==  imagenes3.length){
        actual3 = 0
    }

    imagen3.innerHTML =  `<img class="img" src="${imagenes3[actual3].url}" alt="logo pagina"  loading="lazy"></img>`
    texto3.innerHTML = `
    <h3>${imagenes3[actual3].nombre}</h3>
    <p>${imagenes3[actual3].descripcion}</p>`  

    posicionCarrusel3()
})



function posicionCarrusel3(){
    puntos3.innerHTML = ""
    for (let i = 0; i < imagenes3.length; i++) {
        if(i == actual3){
            puntos3.innerHTML += `<p class= "bold3">.</p>`
        }
        else{
            puntos3.innerHTML += `<p>.</p>`
        }
        
        
    }
}



/*-------------------------------cuarto carru----------------------------------------------------*/

let imagenes4 = [
    {


        "url": "img/",
        "nombre": "proyecto 01",
        "descripcion": "este es solo prueba 5"
    
        },
        {

            "url": "img/",
            "nombre": "proyecto 04",
            "descripcion": "este es solo prueba 3"
        
            },
]

let atras4 = document.getElementById('atras4');
let adelante4 = document.getElementById('adelante4');
let imagen4 = document.getElementById('img4');
let puntos4 = document.getElementById('puntos4');
let texto4 = document.getElementById('texto4');
let actual4 = 0

posicionCarrusel4()

atras4.addEventListener('click',function(){
    actual4 -=1
    if (actual4 == -1){
        actual4 = imagenes4.length -  1
    }

    imagen4.innerHTML =  `<img class="img" src="${imagenes3[actual3].url}" alt="logo pagina"  loading="lazy"></img>`
    texto4.innerHTML = `
    <h3>${imagenes2[actual4].nombre}</h3>
    <p>${imagenes2[actual4].descripcion}</p>`   

    posicionCarrusel4()
})


adelante4.addEventListener('click',function(){
    actual4 +=1
    if (actual4 ==  imagenes4.length){
        actual4 = 0
    }

    imagen4.innerHTML =  `<img class="img" src="${imagenes4[actual4].url}" alt="logo pagina"  loading="lazy"></img>`
    texto3.innerHTML = `
    <h3>${imagenes4[actual4].nombre}</h3>
    <p>${imagenes4[actual4].descripcion}</p>`  

    posicionCarrusel4()
})



function posicionCarrusel4(){
    puntos4.innerHTML = ""
    for (let i = 0; i < imagenes4.length; i++) {
        if(i == actual4){
            puntos4.innerHTML += `<p class= "bold4">.</p>`
        }
        else{
            puntos4.innerHTML += `<p>.</p>`
        }
        
        
    }
}




