export default class User {
    #obj = [];
    constructor(obj, szuloElem) {
        this.#obj = obj;
        this.szuloElem = szuloElem;
        this.megjelenit();
    }

    megjelenit() {
        let kod = `
            <ul>
            <li><a id="termekek" href="#">Termékek</a></li>
            <li><a id="felhasznalok" href="#">Felhasználók</a></li>
            </ul>
            <div class="card">
            <h2>${this.#obj.username}</h2>
            <p>${this.#obj.email}</p>
            <p>${this.#obj.password}</p>
            <p>${this.#obj.id}</p>
        </div>`;

        this.szuloElem.insertAdjacentHTML("beforeend", kod);
    }
}
