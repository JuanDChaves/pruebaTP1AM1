const daleBro = document.getElementById("dale-bro");
const container = document.getElementById("container");
const estadoActual = document.getElementById("estado-actual");

let estado = 1;

const frases = ["frase 1", "frase 2", "frase 3", "frase 4", "frase 5"];
const imagenes = ["imagen 1", "imagen 2", "imagen 3", "imagen 4", "imagen 5"];
const videos = ["video 1", "video 2", "video 3", "video 4", "video 5"];

let clickCount = 1;
let imgCount = 1;


function mostrarTexto() {
    daleBro.disabled = true;
    estadoActual.innerText = `Estado ${estado}`;
    container.style.backgroundColor = "#4682b4"

    cosas();
    clickCount++;
}

// Primer grupo de datos

function cosas() {
      // Crear primera frase
      const fraseEl = document.createElement("p");
      fraseEl.innerHTML = `<span onclick = "masCosas()">${frases[Math.floor(Math.random() * frases.length)]}</span>`;
      container.appendChild(fraseEl);
  
      // Crear primera imagen
      const imagenEl = document.createElement("p");
      imagenEl.innerHTML = `<span onclick = "masCosas()">${imagenes[Math.floor(Math.random() * imagenes.length)]}</span>`;
      imagenEl.style.width = "50px";
      imagenEl.style.height = "50px";
      imagenEl.style.backgroundColor = "cyan";
      container.appendChild(imagenEl);
  
      // Crear primer video 
      const videoEl = document.createElement("p");
      videoEl.innerHTML = `<span onclick = "masCosas()">${videos[Math.floor(Math.random() * videos.length)]}</span>`;
      videoEl.style.width = "50px";
      videoEl.style.height = "50px";
      videoEl.style.backgroundColor = "purple";
      videoEl.style.color = "white";
      container.appendChild(videoEl);
}

// Segundo grupo de datos

function masCosas() {
      // Crear segunda frase
      const fraseEl = document.createElement("p");
      fraseEl.innerHTML = `<span onclick = "siguienteEstado()">${frases[Math.floor(Math.random() * frases.length)]}</span>`;
      container.appendChild(fraseEl);
  
      // Crear segunda imagen
      const imagenEl = document.createElement("p");
      imagenEl.innerHTML = `<span onclick = "siguienteEstado()">${imagenes[Math.floor(Math.random() * imagenes.length)]}</span>`;
      imagenEl.style.width = "50px";
      imagenEl.style.height = "50px";
      imagenEl.style.backgroundColor = "cyan";
      container.appendChild(imagenEl);
  
      // Crear segundo video 
      const videoEl = document.createElement("p");
      videoEl.innerHTML = `<span onclick = "siguienteEstado()">${videos[Math.floor(Math.random() * videos.length)]}</span>`;
      videoEl.style.width = "50px"; 
      videoEl.style.height = "50px";
      videoEl.style.backgroundColor = "purple";
      videoEl.style.color = "white";
      container.appendChild(videoEl);
}

// Cambio de estados

function siguienteEstado() {
    estado++;
    if (estado === 2) {
        container.style.backgroundColor = "#d2691e";
        container.innerHTML = "";
        container.innerHTML = `
        <h2><span class="estado-actual" id="estado-actual"</span>Estado ${estado}</h2>
        `;
        cosas();
    } else if (estado === 3) {
        container.style.backgroundColor = "#696969";
        container.innerHTML = "";
        container.innerHTML = `
        <h2><span class="estado-actual" id="estado-actual"</span>Estado ${estado}</h2>
        `;
        cosas();
    } else if (estado === 4) {
        container.style.backgroundColor = "#3cb371";
        container.innerHTML = "";
        container.innerHTML = `
        <h2><span class="estado-actual" id="estado-actual"</span>Estado ${estado}</h2>
        `;
        cosas();
    } else {
        container.style.backgroundColor = "#000";
        container.innerHTML = "";
        container.innerHTML = `
        <h2><span class="estado-actual" id="estado-actual"</span>Estado ${estado}</h2>
        `;
        container.style.color = "white";
        const perfil = document.createElement("p");
        perfil.textContent = "AQUI VA EL PERFIL";
        perfil.style.fontSize = "3em";
        container.appendChild(perfil);
    }
}

// Eventos 

daleBro.addEventListener("click", mostrarTexto)
