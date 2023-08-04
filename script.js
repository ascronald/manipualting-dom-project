let pbutton = document.getElementById("p-button");
let imgbutton = document.getElementById("img-button");
let pdiv = document.getElementById("p-div");
let imgdiv = document.getElementById("img-div");
const body = document.querySelector("body");


pbutton.onclick = function(){
    pdiv.style.display = "inline-block";
    imgdiv.style.display = "none";
    const newmessage = document.createElement("p");
    newmessage.innerText = "My name is Walter Hartwell White. I live at 308 Negra Arroyo Lane Albuquerque New Mexico 87104.";
    newmessage.style.backgroundColor = "#000000";
    newmessage.style.color = "white";
    pdiv.appendChild(newmessage);
}

imgbutton.onclick = function(){
    imgdiv.style.display = "inline-block";
    const newimage = document.createElement("img");
    newimage.src="walter.webp";
    imgdiv.appendChild(newimage);
    newimage.height=250;
    newimage.width=250;
    pdiv.style.display = "none";
}