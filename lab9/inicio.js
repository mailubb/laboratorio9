const contenedor = document.getElementById("contenedor")
contenedor.innerHTML += `
    <img src="3135823.png" alt="" width="60px" height="60px">
    <input type="text" placeholder="¿Qué estás pensando, Mailu?" id="abrir">
`
const modal = document.getElementById("ventanaModal")
modal.innerHTML += `
    <h1>Crear publicación</h1> 
    <img src="Capa 2.png" alt="" width="20px" height="20px" id="closebutton">
    <img src="3135823.png" alt="" width="50px" height="50px" id="profilepic">
    <p class="name"> Mailu Bermudez</p>
    <input type="text" placeholder="¿Qué estás pensando Mailu?" class="texto" id="texto">
    <button id="publish" class="publish">Publicar</button>
`
const open = document.getElementById("abrir")
const overlay = document.getElementById("overlay")
const close = document.getElementById('closebutton')
const publicar = document.getElementById('publish')
const texto = document.getElementById('texto')
const publicacionDone = document.getElementById('contenedorpublicacion')

open.addEventListener('focus', entrarmodal)

function entrarmodal(){
    modal.classList.add('entrarmodal')
    overlay.classList.add('entraroverlay')
}

close.addEventListener('click', salirmodal)

function salirmodal(){
    modal.classList.remove('entrarmodal')
    overlay.classList.remove('entraroverlay')
    texto.value = ""
}


publicar.addEventListener('click', publica)

function publica(){
    var publicacion = `
    <div class="publicacion">
        <img src="3135823.png" alt="" width="50px" height="50px" id="profilepic2">
        <p class="nombre"> Mailu Bermudez</p>
        <div id="variable">
            <p class="variable">${texto.value}</p>
        </div>
    </div>
    `
    publicacionDone.innerHTML += publicacion

    salirmodal()  
}

texto.addEventListener('input',cambioBoton)

function cambioBoton () {
    if(texto.value){
        publicar.classList.add("buttonchange")
        publicar.classList.remove("publish")
    }
    else{
        publicar.classList.remove("buttonchange")
        publicar.classList.add("publish")
    }

}









