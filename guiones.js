const div = document.getElementById('miDiv');
console.log(div.textContent); // Output: "Hola, mundo!"

div.textContent = "¡Hola, OpenAI!";
console.log(div.textContent); // Output: "¡Hola, OpenAI!"

const div = document.getElementById('miDiv');
console.log(div.innerHTML); // Output: "Hola, <span>mundo</span>!"

div.innerHTML = "¡Hola, <strong>OpenAI</strong>!";
console.log(div.innerHTML); // Output: "¡Hola, <strong>OpenAI</strong>!"


const div = document.getElementById('miDiv');
console.log(div.outerHTML);
// Output: "<div id="miDiv">Hola, <span>mundo</span>!</div>"

div.outerHTML = '<p id="nuevoParrafo">¡Hola a todos!</p>';
console.log(div.outerHTML);
// Output: "<p id="nuevoParrafo">¡Hola a todos!</p>"


// Crear un nuevo elemento <li>
const nuevoElementoLi = document.createElement('li');
nuevoElementoLi.textContent = 'Nuevo elemento';

// Obtener el elemento padre (ul) al que queremos agregar el nuevo elemento
const lista = document.getElementById('miLista');

// Agregar el nuevo elemento como un nodo al final de la lista de elementos hijos
lista.appendChild(nuevoElementoLi);
