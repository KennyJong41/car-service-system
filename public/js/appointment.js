import { collection, addDoc } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

async function bookService(){

let vehicle = document.getElementById("vehicle").value;
let date = document.getElementById("date").value;
let time = document.getElementById("time").value;

await addDoc(collection(db,"appointments"),{

vehicle: vehicle,
date: date,
time: time,
status:"pending"

});

alert("Appointment booked!");

}