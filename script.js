const permitidos = [
"admin@lafov.com"
];

function verificar(){

const email = document.getElementById("email").value;
const file = document.getElementById("file");
const mensaje = document.getElementById("mensaje");

if(permitidos.includes(email)){
file.disabled = false;
mensaje.innerText = "✅ Acceso permitido";
mensaje.style.color = "green";
}else{
file.disabled = true;
mensaje.innerText = "❌ No autorizado";
mensaje.style.color = "red";
}
}

document.getElementById("file").addEventListener("change", function(e){

const contenedor = document.getElementById("galeria-contenido");

if(e.target.files[0]){
const img = document.createElement("img");
img.src = URL.createObjectURL(e.target.files[0]);
contenedor.appendChild(img);
}

});