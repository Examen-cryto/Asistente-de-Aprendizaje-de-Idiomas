const vocabularios = {
    "es-en": [
        { palabra: "Hola", traduccion: "Hello" },
        { palabra: "Adiós", traduccion: "Goodbye" },
        { palabra: "Gracias", traduccion: "Thank you" },
        { palabra: "Por favor", traduccion: "Please" },
        { palabra: "Perro", traduccion: "Dog" }
    ],
    "es-fr": [
        { palabra: "Hola", traduccion: "Bonjour" },
        { palabra: "Adiós", traduccion: "Au revoir" },
        { palabra: "Gracias", traduccion: "Merci" },
        { palabra: "Por favor", traduccion: "S'il vous plaît" },
        { palabra: "Perro", traduccion: "Chien" }
    ],
    "es-de": [
        { palabra: "Hola", traduccion: "Hallo" },
        { palabra: "Adiós", traduccion: "Auf Wiedersehen" },
        { palabra: "Gracias", traduccion: "Danke" },
        { palabra: "Por favor", traduccion: "Bitte" },
        { palabra: "Perro", traduccion: "Hund" }
    ]
};

let vocabularioActual = [];
let palabraActual = {};

document.getElementById('cargarVocabulario').addEventListener('click', () => {
    const idiomaSeleccionado = document.getElementById('idioma').value;
    vocabularioActual = vocabularios[idiomaSeleccionado];
    mostrarVocabulario(vocabularioActual);
});

function mostrarVocabulario(vocabulario) {
    const lista = document.getElementById('listaVocabulario');
    lista.innerHTML = '';

    vocabulario.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.palabra} - ${item.traduccion}`;
        lista.appendChild(li);
    });

    document.getElementById('vocabulario').classList.remove('oculto');
    iniciarPrueba();
}

function iniciarPrueba() {
    palabraActual = vocabularioActual[Math.floor(Math.random() * vocabularioActual.length)];
    document.getElementById('pregunta').textContent = `Traduce: ${palabraActual.palabra}`;
    document.getElementById('prueba').classList.remove('oculto');
    document.getElementById('respuesta').value = '';
}

document.getElementById('verificar').addEventListener('click', () => {
    const respuesta = document.getElementById('respuesta').value.trim();
    const resultado = document.getElementById('resultado');

    if (respuesta.toLowerCase() === palabraActual.traduccion.toLowerCase()) {
        resultado.textContent = "¡Correcto! 🎉";
        resultado.style.color = "green";
    } else {
        resultado.textContent = `Incorrecto. La respuesta correcta es: ${palabraActual.traduccion}`;
        resultado.style.color = "red";
    }

    setTimeout(() => iniciarPrueba(), 2000);
});
