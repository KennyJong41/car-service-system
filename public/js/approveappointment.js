import { doc, updateDoc } from 
"https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

async function approveAppointment(id){

const ref = doc(db,"appointments",id);

await updateDoc(ref,{
status: "approved"
});

}