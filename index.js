import Services from "./Services.js";
import Termekek from "./Termekek.js";
import Users from "./Users.js";

const taroloELEM = document.querySelector(".tartalom");
const termekGOMB = document.getElementById("termekek")
const userGOMB = document.getElementById("felhasznalok")


let lista = [];

const services = new Services();

function termekMegjelenit(data) {
    new Termekek(data,taroloELEM)
}

function felhasznaloMegjelenit(data){
    new Users(data,taroloELEM)
}

termekGOMB.addEventListener("click", function(){
    services.getAdat("https://fakestoreapi.com/products",termekMegjelenit);
});

userGOMB.addEventListener("click", function(){
    services.getUsers("https://fakestoreapi.com/users", felhasznaloMegjelenit())
})