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

    let obtenerDetalles = async (id) => {
        const urlPje = `https://rickandmortyapi.com/api/character/${id}`;
        let datosPje;
        try {
            let resPje = await fetch(urlPje);
            let datos = await resPje.json();
            datosPersons = datos;
            let detallesPersonajes = new DetallesPersonajes(datosPersons.id, datosPersons.species);
            detallesPersonajes.infoGeneral(datosPersons.id, datosPersons.species);
            return datos;
            } catch (error) {
            console.error(error);
        }
    };

    return {
        mostrar: async () => {
            const personajes = await obtenerPersonajes();
            const detalles = await obtenerDetalles();
            const respuestaPersonajes = await personajes.results;
            const respuestaDetalles = await detalles.results;

            infoGeneral()
            infoModal()
            // Esto se va a infoGeneral():
            // respuestaPersonajes.forEach((pers) => {
            //     resultados.innerHTML += `
            //     <section>
            //         <img src=${pers.image}>
            //         <div class=per id=${pers.id}>
            //             <ul>
            //                 <li>
            //                     <span>${pers.id}</span>
            //                 </li>
            //                 <li>
            //                     <span>${pers.species}</span>
            //                 </li>
            //             </ul>
            //         </div>
            //     </section>
            //     `;
            // });
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
