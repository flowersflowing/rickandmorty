import {DetallePersonajes} from '../../assets/js/detallePersonajes.js';

let personaje1 = new DetallePersonajes();

let llamadoPersonajes = (() => {
    const urlAPI = "https://rickandmortyapi.com/api/character/";
    const resultados = document.getElementById("resultado");
    let datosPersonajes;

    let obtenerPersonajes = async () => {
        try {
            let respuesta = await fetch(urlAPI);
            let datos = await respuesta.json();
            datosPersonajes = datos;
            console.log(datosPersonajes);
            return datos;
        } catch(error) {
            console.error(error);
        }
    };

    return {
        mostrar: async () => {
            const personajes = await obtenerPersonajes();
            const respuestaPersonajes = await personajes.results;
            respuestaPersonajes.forEach((pers) => {
                resultados.innerHTML += `
                <div>
                    <img src="${pers.image}">
                <div>
                `;
            });
        }
    }
})();

setTimeout(() => {
    let spinner = document.getElementById("spinner");
    spinner.style.display = "none";
}, 2000);

llamadoPersonajes.mostrar();
