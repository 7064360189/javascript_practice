// let  btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("button is clicked");
//     let a = 46;
//     a++;
//     console.log(a)
// // } 
//     Q2
// let modebtn = document.querySelector("#btn1");
// let curmode = "light";
// modebtn.addEventListener("click", () =>{
//     if (curmode === "light"){
//         curmode="dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     }else{
//         curmode="light";
//         document.querySelector("body").style.backgroundColor = "white";

//     }
//     console.log(curmode)
// })

// or  by class name

let modebtn = document.querySelector("#btn1");
let body= document.querySelector("body")
let curmode = "light";
modebtn.addEventListener("click", () =>{
    if (curmode === "light"){
        curmode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        curmode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(curmode)
})

