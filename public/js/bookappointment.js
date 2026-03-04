function bookAppointment(){

let vehicleId = document.getElementById("vehicle").value;
let serviceId = document.getElementById("service").value;
let date = document.getElementById("date").value;
let time = document.getElementById("time").value;

const user = auth.currentUser;

addDoc(collection(db,"appointments"),{

userId: user.uid,
vehicleId: vehicleId,
serviceId: serviceId,
date: date,
time: time,
status: "pending"

});

alert("Appointment booked");

}