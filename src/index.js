import "./style/index.scss";

import {
    MyClass
} from "./MyClass"



//create new class
let myClass = new MyClass();
myClass.sendMessage();

//bootstrap button
const app = document.getElementById("app");
app.insertAdjacentHTML('beforeend', '<button type="button" class="">Button</button>');