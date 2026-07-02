document.getElementById("contact-form")
.addEventListener("submit", function(event){

event.preventDefault();

const btn =
this.querySelector("button");

btn.innerHTML = "Enviando...";

emailjs.send(

"service_gw6a5l9",

"template_f4fa188",

{

name:
this.nombre.value,

email:
this.correo.value,

title:
this.asunto.value,

message:
this.mensaje.value

}

)

.then(() => {

alert(
"✅ Mensaje enviado correctamente"
);

this.reset();

btn.innerHTML =
"Enviar Mensaje";

})

.catch((error) => {

console.error("ERROR EMAILJS:", error);

alert(
"ERROR: " + JSON.stringify(error)
);

btn.innerHTML =
"Enviar Mensaje";

});

});