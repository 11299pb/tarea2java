consola.log(cajaParrafos.childNodes)
consola.log(cajaParrafos.niños[4].innerText = 'cambio desde JS')


console.log(enlace.getAttribute('href'))
formulario.setAttribute('action', '#')
console.log(formulario.getAttribute('action'))


let metaTags = document.querySelectorAll('meta')

for (const tag of metaTags) {
console.log(tag.getAttribute('content'))
 }

formulario.action = "/controladores/guardar.php"

consola.log(enlace.href)
consola.log(boton2.id)
console.log(boton2.getAttribute('id'))

let input = documento.querySelector('input')


consola.log(input.value)
console.log(titulo.getAttribute('class').replace('fw-bold',''))
consola.log(titulo.classList)

titulo.classList.add('fs-6')
titulo.classList.remove('text-success')
titulo.classList.add('text-danger')



console.log(texto[1].textContent);
texto[1].textContent = "hola, altere el texto"

consola.log(cajaParrafos.textContent)
consola.log(cajaParrafos.innerText)
consola.log(cajaParrafos.innerHTML)
consola.log(cajaParrafos.outerHTML)

cajaParrafos.innerHTML = "<tabla></tabla>"

const tablaGenerada = documento.createElement('tabla')
const parrafoNuevo = documento.createElement('p')

parrafoNuevo.textContent = "parrafo creado desde JS"
parrafoNuevo.classList.add('text-info', 'fw-bold')

cajaParrafos.appendChild(tablaGenerada)
cajaParrafos.appendChild(parrafoNuevo)

consola.log(cajaParrafos.firstChild)
consola.log(cajaParrafos.firstElementChild)
consola.log(cajaParrafos.lastChild)
consola.log(cajaParrafos.lastElementChild)
consola.log(cajaParrafos.nextElementSibling)
consola.log(cajaParrafos.siguienteHermano)
consola.log(cajaParrafos.previousElementSibling.previousElementSibling)
consola.log(cajaParrafos.parentElement)


let enlaceHermano = documento.getElementById('email').parentElement.parentElement.parentElement.nextElementSibling
enlaceHermano.href = "https://cit.mindef.mil.gt"
enlaceHermano.innerText = "Ir a AUTOCOM"
consola.log(enlaceHermano)

documento.addEventListener('dblclick', (e)=>{
    consola.log(e)
})