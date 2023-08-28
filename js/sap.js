let team = document.getElementById("team");
let plan = document.getElementById("plan");
let metod = document.getElementById("metod");


function compar(a,b){
    return b.data().date_posted - a.data().date_posted;
}

sapDb.onSnapshot((snapshot) => {
    sap = snapshot.docs;
    sap.sort(compar);
    team.innerHTML = "";
    plan.innerHTML = "";
    metod.innerHTML = "";

    for (let i = 0;i < sap.length;i++){
        if (sap[i].data().link == "nodisplay123456789321453"){
            continue;
        }
        if (sap[i].data().category == 1){
            team.innerHTML += `<a target = "_blank" href = "${sap[i].data().link}">${sap[i].data().title}</a>`
        }
        if (sap[i].data().category == 2){
            plan.innerHTML += `<a target = "_blank" href = "${sap[i].data().link}">${sap[i].data().title}</a>`
        }
        if (sap[i].data().category == 3){
            metod.innerHTML += `<a target = "_blank" href = "${sap[i].data().link}">${sap[i].data().title}</a>`
        }

    }
});