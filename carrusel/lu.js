/* este lo sabe cualquiera XD*/

let inputImg = document.getElementById("imgInput");
let divImg = document.getElementById("ImgContaine");

/* aqui agrega un evento de cambio al elemento de entrada de imagen */
inputImg.addEventListener("change", function(event) {
  let files = event.target.files; // aqui obtenemos los archivos seleccionados por el usuario es como contarlos 

  /* comparar sobre cada archivo seleccionado  */
  for (let i = 0; i < files.length; i++) {
    let file = files[i];
    let reader = new FileReader(); // Crear un objeto FileReader ese por el momento se que ayuda para las img no se si sirvera para otras cosas

    /*Cuando se carga el contenido del archivo*/
    reader.onload = function(e) {
      /* Crear una nueva etiqueta img y asignar la URL de datos (base64) como src*/
      let img = document.createElement("img");
      img.src = e.target.result;
      divImg.appendChild(img); /* Agregar la imagen al contenedor*/

      /* Guardar cada imagen en el localStorage con una clave única  esto busque de como hacer llaves diferentes*/
      localStorage.setItem("recent-image-" + Date.now() + i, e.target.result);
    };

    /* hace que el  contenido lea el archivo como una URL de datos (base64)*/
    reader.readAsDataURL(file);
  }
});

/* Cuando el contenido HTML ha sido completamente cargado osea cuando la img ya esta en la img mas que todo es el "DOMcontentLoaded" de eso*/
document.addEventListener("DOMContentLoaded", () => {
  /* comparar sobre todas las claves en el localStorage   eso de key lo copie un codigo por hay XD y maso menos no se para que se usa solo maso menos se que se utiliza para guardar temporalmente el nombre de cada clave en el localStore o algo asi*/
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    /* Verificar si la clave corresponde a una imagen guardada recientemente*/
    if (key.startsWith("recent-image-")) {
      /* Crear una nueva etiqueta img y asignar la URL de datos (base64) almacenada como src*/
      let img = document.createElement("img");
      img.src = localStorage.getItem(key);

     
      
      divImg.appendChild(img);/* Agregar la imagen al div que lo contiene */
    }
  }
});

