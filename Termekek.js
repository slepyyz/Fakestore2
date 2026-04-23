import Termek from "./Termek.js";

export default class Termekek{
    #list=[];
    constructor(list,szuloElem){
        this.#list=list;
        this.szuloElem=szuloElem;
        this.megjelenit();
    }

    megjelenit(){
        this.#list.forEach((termek) => {
            new Termek(termek,this.szuloElem);
        });
    }
}