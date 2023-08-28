let regulament = document.querySelector("#regulament");
let rute = document.querySelector("#rute");

function compar(a,b){
    return b.data().date_posted - a.data().date_posted;
}


transportDb.onSnapshot((snapshot) => {
    transports = snapshot.docs;
    transports.sort(compar);
    regulament.innerHTML = "";
    rute.innerHTML = "";

    for (let i = 0;i < transports.length;i++){
        if (transports[i].data().link == "nodisplay123456789321453"){
            continue;
        }
        if (transports[i].data().category == 1){
            regulament.innerHTML += `<a target = "_blank" href = "${transports[i].data().link}">${transports[i].data().title}</a>`
        }
        if (transports[i].data().category == 2){
            rute.innerHTML += `<a target = "_blank" href = "${transports[i].data().link}">${transports[i].data().title}</a>`
        }
    }
});