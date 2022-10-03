
// Day 1
// Write code that will return random letter from your Name
// let Name = "Jonathana";
// console.log(Name.charAt(Math.floor(Math.random() * Name.length) ));

// Rock Paper Scissors
// let PlayerDecision = confirm("Do you want to play Rock, Paper, Scissors ?");
// if (PlayerDecision) {
//     let PlayerChoice = prompt("Pick: Rock, Paper or Scissors").trim().toLocaleLowerCase();
//     console.log(PlayerChoice);
//         if (!(PlayerChoice === "rock" || PlayerChoice === "paper" || PlayerChoice === "scissors" )) {
//           alert("Your didn't enter rock, paper, scissors !")  
//         }

//     let Computer = Math.floor(Math.random * 3) + 1;
//     let ComputerChoice = Computer === 1 ? "rock" 
//     : Computer === 2 ? "paper"
//     : "scissors" ;
//     console.log(ComputerChoice);
    
//     let Results = ComputerChoice === PlayerChoice  ? "Tie !" 
//     :  ComputerChoice === "rock" && PlayerChoice === "paper" ? "You Win !"
//     :  ComputerChoice === "scissors" && PlayerChoice === "paper" ? "You Lost !" 
//     :  ComputerChoice === "scissors" && PlayerChoice === "rock" ? "You Win !" 
//     :  ComputerChoice === "paper" && PlayerChoice === "rock" ? "You Lost !" 
//     :  ComputerChoice === "paper" && PlayerChoice === "scissors" ? "You Win !" 
//     :  "Yuo Lost !";
//     alert(Results);
//     let PlayAgain = confirm("Play again ?");
//     PlayAgain ? location.reload() : alert("Ok, Thanks for playing !");
// } else {
//     alert("Ok. See you Later !")
// }

// Name uppercase
// const Function = (name1,surname2) => {
//      name1 = name1.charAt(0).toUpperCase() + name1.slice(1);
//      surname2 = surname2.charAt(0).toUpperCase() + surname2.slice(1);
//      const Full = name1 + ' ' + surname2;
//      return Full;
// }
// let name1 = prompt("Name");;
// let surname2 = prompt("Surname");;
// console.log(Function(name1,surname2))

// const ArrA = ["A","B","C"];
// const ArrB = ["D","E","F"];

// const NewArr = [...ArrA,...ArrB ];
// console.log(NewArr);

// Day 2
// const Obj = { 
//     name3: "Dave",
//     surname: "Mate",
//     address: "Washinghton",
//     phone: 112346574,
//     Full_name: function (Age) {
//         return `${Obj.name3} ${Obj.surname} ${Age} `;
//     }
// };

// const Data = ({surname,name3}) => {
//     return `Welcome, ${surname}, !`;
// }
// console.log(Data(Obj));
// console.log(Obj.Full_name(21));

// Parent
// class Pizza {
//     constructor(){
//         this._Size;
//         this._Crust = "Thin"; 
//     }
//     getSize(){
//         return this._Size;
//     }
//     setSize(Size){
//         this._Size = Size;
//     }
//     getCrust(){
//         return this._Crust;
//     }
//     setCrust(Crust){
//         this._Crust = Crust;
//     }
// }
// const Pizza1 = new Pizza;
// Pizza1.setSize(20);
// console.log(Pizza1);

// //Extends class as child of Pizza
// class SpecialPizza extends Pizza {
//     constructor(Pizza_name){
//         super();
//         this._Size = 40;
//         this._Pizza_name = Pizza_name;
//     }
//     WhatsSpeciality(){
//         console.log(`Todays special Pizza is ${this.Pizza_name}, size ${this.Size}, Crust is ${this.Crust}`)
//     }
// }

// const Today = new SpecialPizza("Margarita");
// Today.WhatsSpeciality();
// console.log(Today);

// Day 3 JSON,Error Handling,
const Person ={
    name: "Adrian",
    surname: "Z",
    age: 21,
    sex: "male",
    hobby:  ["proggraming","books","cooking"]
}
const JSONPackage = JSON.stringify(Person);
console.log(JSONPackage);

const JSONPackageReceive = JSON.parse(JSONPackage);
console.log(JSONPackageReceive);
let view2 = document.querySelector("#view2");
console.log(view2);
view2.style.display = "flex";
let view1 = document.querySelector("#view1");
let EvenDiv = view1.querySelectorAll("div:nth-of-type(2n+1)");
console.log(EvenDiv);
for (let index = 0; index < EvenDiv.length; index++) {
    EvenDiv[index].style.backgroundColor ="darkcyan";
 
}

const navbar = document.querySelector("nav");
navbar.innerHTML = "<h1>Hello1 !</h1><p>This should be alligned to right</p>"
console.log(navbar.children);

while(view2.lastChild){
    view2.lastChild.remove();
}
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";

const NewDiv = (parent, count) => { 
    const Div = document.createElement("div");
    Div.textContent = count;
    Div.style.backgroundColor = "#000";
    Div.style.width = "100px";
    Div.style.height = "100px";
    Div.style.margin = "10px";
    Div.style.display = "flex";
    Div.style.justifyContent = "center";
    Div.style.alignItems = "center";
    parent.append(Div);
}
for (let index = 1; index <= 12; index++) {
    NewDiv(view2,index);
}

//Day X
document.addEventListener("readystatechange", (e) =>{
    if (e.target.readyState === "complete") {
      //  alert("Loaded");
        initApp();
    }
})
//Synstax x.addEventListener("click,...",function, true(from outside to inside), false(from inside to outside ))
const initApp = () => {
    const cont = document.querySelector("#cont");
    const background = cont.querySelector("div");
    const h2 = background.firstElementChild;
    
    cont.addEventListener("click",(e) => {
          cont.classList.toggle("color_toggle"); //toggle,add,remove
      //  cont.style.backgroundColor = "purple";
    },)
    
    background.addEventListener("click",(e) => {
         // e.target.style.backgroundColor = "yellow";
         background.style.backgroundColor = "yellow";
    },)
    
    h2.addEventListener("click",(e) => {
        h2.innerHTML = "Clicked !";
    },)
}

navbar.addEventListener("mouseover", (e) => {
    navbar.style.height = "100px";
})

navbar.addEventListener("mouseleave", (e) => {
    e.target.style.height = "48px";
})

const clicker = document.getElementById("clicker");
const button = clicker.firstElementChild;
var clicks = 0;
sessionStorage.setItem("Clicks",clicks);

clicker.addEventListener("click", (e) => {
    let h2 = document.createElement("h2");
    var clicks_Receive = sessionStorage.getItem("Clicks");
    clicks_Receive++;
    sessionStorage.setItem("Clicks",clicks_Receive);
    h2.textContent = "Clicks: " + clicks_Receive;
    clicker.lastElementChild.remove();
    clicker.append(h2);
})
button.addEventListener("click", (e) =>{
    //e.stopPropagation()
    sessionStorage.clear("Clicks");
    sessionStorage.setItem("Clicks",-1);  
})


//Web Storage Api
const Data = { 
    name: "Andrew",
    Age: 23,
    Bool: true,
    log_name: function (){
        console.log(this.name);
    }
}
localStorage.setItem("MyLocalStorage",JSON.stringify(Data));
const MyLocalStorage_Receive = JSON.parse(localStorage.getItem("MyLocalStorage"));


//Export,import (Modules)
//import * as Module from "./Modules.js";
import {func1,func2,func3} from "./Modules.js";
import {User} from "./User.js";
console.log(func1());
const me = new User("John","Wick",21);
console.log(me);

// arrays 
import { JSON_DATA } from "./JSON_Data.js";
JSON_DATA.forEach((data) =>{
    console.log(data);
})

const Filtered_Data = JSON_DATA.filter( (data) =>{
    return data.userId === 1;
})
console.log(Filtered_Data);

const Mapped_Data = Filtered_Data.map((data) => {
    return data.id * 10;
})
console.log(Mapped_Data);

// array[0] =+/* (array[1],array[2],array[3]...)
const ReducedValues = Mapped_Data.reduce((previous,data,InitValues) =>{
    return previous + data;
})
console.log(ReducedValues);
console.clear();

import { Promise_Function,Fetch_Function } from "./Async.js";
//Promise_Function();
//Fetch_Function();

