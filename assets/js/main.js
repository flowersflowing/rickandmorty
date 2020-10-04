import {DetallePersonajes} from '../../assets/js/detallePersonajes.js';

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

    // let obtenerDetalles = async (id) => {

    // };

    return {
        mostrar: async () => {
            const personajes = await obtenerPersonajes();
            const respuestaPersonajes = await personajes.results;
            respuestaPersonajes.forEach((pers) => {
                resultados.innerHTML += `
                <section>
                    <img src=${pers.image}>
                    <div class=per id=${pers.id}>
                        <ul>
                            <li>
                                <span>${pers.id}</span>
                            </li>
                            <li>
                                <span>${pers.species}</span>
                            </li>
                        </ul>
                    </div>
                </section>
                `;
            });
        }
    }
})();

setTimeout(() => {
    let spinner = document.getElementById("spinner");
    spinner.style.display = "none";
    let cantidadPersonajes = document.getElementsByClassName("per").length;
    document.getElementById("cantidadPersonajes").innerHTML = `${cantidadPersonajes}`;
}, 2000);

llamadoPersonajes.mostrar();
