/* EMAILS AUTORIZADOS */
const permitidos = [
"admin@feria.com",
"grimaldi@feria.com"
];

function verificar(){

const email = document.getElementById("email").value;
const file = document.getElementById("file");
const mensaje = document.getElementById("mensaje");

if(permitidos.includes(email)){
file.disabled = false;
mensaje.innerText = "✅ Podés subir imágenes";
mensaje.style.color = "green";
}else{
file.disabled = true;
mensaje.innerText = "❌ No autorizado";
mensaje.style.color = "red";
}
}

/* PREVIEW */
document.getElementById("file").addEventListener("change", function(e){

const preview = document.getElementById("preview");

if(e.target.files[0]){
preview.src = URL.createObjectURL(e.target.files[0]);
preview.style.display = "block";
}

});