import { getDocs, collection } from 
"https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

async function loadAppointments(){

const querySnapshot = await getDocs(collection(db,"appointments"));

querySnapshot.forEach((doc)=>{

console.log(doc.id, doc.data());

});

}