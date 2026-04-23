export default class Termek {
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
            </ul><div class="card">
            <img src="${this.#obj.image}" alt="${this.#obj.title}">
            <h2>${this.#obj.title}</h2>
            <p>${this.#obj.category}</p>
            <p>${this.#obj.price}</p>
            <p>${this.#obj.description}</p>
            <p><span>${this.#obj.rating.rate}</span><span>${this.#obj.rating.count}</span></p>
        </div>`;

        this.szuloElem.insertAdjacentHTML("beforeend", kod);
    }
}
