import User from "./User.js";

export default class Users{
    #list=[];
    constructor(list,szuloElem){
        this.#list=list;
        this.szuloElem=szuloElem;
        this.megjelenit();
    }

    megjelenit(){
        this.#list.forEach((user) => {
            new User(user,this.szuloElem);
        });
    }
}