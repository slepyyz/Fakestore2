import Services from "./Services.js";
import Termekek from "./Termekek.js";
import Users from "./Users.js";

const taroloELEM = document.querySelector(".tartalom");
const termekGOMB = document.getElementById("termekek")
const userGOMB = document.getElementById("felhasznalok")


let lista = [];

const services = new Services();

function hibaKezelo(error){
    const error500Elem = document.querySelector(".error-message-500");
    const error404Elem = document.querySelector(".error-message-404");
    if (error.statusCode == 500) {
        error500Elem.classList.remove("lathatatlan")
    }else{
        error404Elem.classList.remove("lathatatlan")
    }
}

function termekMegjelenit(data) {
    new Termekek(data,taroloELEM)
}

function felhasznaloMegjelenit(data){
    new Users(data,taroloELEM)
}

termekGOMB.addEventListener("click", function(){
    services.getAdat("https://fakestoreapi.com/product",termekMegjelenit, hibaKezelo);
});

userGOMB.addEventListener("click", function(){
    services.getAdat("https://fakestoreapi.com/users", felhasznaloMegjelenit, hibaKezelo)
})