import {Personajes} from '../../assets/js/personajes.js';

export class DetallePersonajes extends Personajes {
        constructor(id, name, status, species, gender, created, origin, location, episode) {
            super(id);
            this._name = name;
            this._status = status;
            this._species = species;
            this._gender = gender;
            this._created = created;
            this._origin = origin;
            this._location = location;
            this._episode = episode;
        }

        get name() {
        return this._name;
        }

        set name(nuevo_name) {
        this._name = nuevo_name;
        }

        get status() {
        return this._status;
        }

        set status(nuevo_status) {
            this._status = nuevo_status;
        }

        get species() {
            return this._species;
            }
        
        set species(nuevo_species) {
            this._species = nuevo_species;
        }

        get gender() {
            return this._gender;
            }
        
        set gender(nuevo_gender) {
            this._gender = nuevo_gender;
        }        

        infoGeneral() {
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
            // return `
            // <ul>
            //     <li><p>${this.id}</p></li>
            //     <li><p>${this.species}</p></li>
            // </ul>
            // `;
        }

        infoModal() {
            respuestaDetalles.forEach(pers) => {
                resultados.innerHTML += `
                <ul>
                    <li><p>${this.name}</p></li>
                    <li><p>${this.status}</p></li>
                </ul>                
                `;
            }
        }
    }

