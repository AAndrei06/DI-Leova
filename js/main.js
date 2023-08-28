const firebaseConfig = {
    apiKey: "AIzaSyBzB8J-GlIqTl4uQ6iy_gfYbX7xynCSRNg",
    authDomain: "di-leova.firebaseapp.com",
    projectId: "di-leova",
    storageBucket: "di-leova.appspot.com",
    messagingSenderId: "556003008865",
    appId: "1:556003008865:web:ce04ce53739f03508aa520",
    measurementId: "G-70JH5DTQRR"
  };

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth(); 
const db = firebase.firestore();
const activityDb = db.collection("activity");
const eventsDb = db.collection("events");
const reportDb = db.collection("report");
const mngedDb = db.collection("mnged");
const sapDb = db.collection("sap");
const tabaraDb = db.collection("tabara");
const transportDb = db.collection("tranport");

function formatareData(stamp){
    let data = new Date(stamp);
    let an = data.getFullYear();
    let luna = data.getMonth() + 1;
    let zi = data.getDate();
    let result = zi + "." + luna + "." + an;

    return result;
}