let planuri_lunare = document.getElementById("planuri-lunare");
let planuri_anuale = document.getElementById("planuri-anuale");
let ordine = document.getElementById("ordine");
let buget = document.getElementById("buget");
let sedinte = document.getElementById("sedinte");
let decizii = document.getElementById("decizii");
let programe = document.getElementById("programe");
let note = document.getElementById("note");

function compar(a,b){
    return b.data().date_posted - a.data().date_posted;
}

activityDb.onSnapshot((snapshot) => {
    activities = snapshot.docs;
    activities.sort(compar);
    planuri_lunare.innerHTML = "";
    planuri_anuale.innerHTML = "";
    ordine.innerHTML = "";
    buget.innerHTML = "";
    sedinte.innerHTML = "";
    decizii.innerHTML = "";
    programe.innerHTML = "";
    note.innerHTML = "";

    for (let i = 0;i < activities.length;i++){
        if (activities[i].data().link == "nodisplay123456789321453"){
            continue;
        }
        if (activities[i].data().category == 1){
            planuri_lunare.innerHTML += `<a target = "_blank" href = "${activities[i].data().link}">${activities[i].data().title}</a>`
        }
        if (activities[i].data().category == 2){
            planuri_anuale.innerHTML += `<a target = "_blank" href = "${activities[i].data().link}">${activities[i].data().title}</a>`
        }
        if (activities[i].data().category == 3){
            ordine.innerHTML += `<a target = "_blank" href = "${activities[i].data().link}">${activities[i].data().title}</a>`
        }
        if (activities[i].data().category == 4){
            buget.innerHTML += `<a target = "_blank" href = "${activities[i].data().link}">${activities[i].data().title}</a>`
        }
        if (activities[i].data().category == 5){
           sedinte.innerHTML += `<a target = "_blank" href = "${activities[i].data().link}">${activities[i].data().title}</a>`
        }
        if (activities[i].data().category == 5){
            decizii.innerHTML += `<a target = "_blank" href = "${activities[i].data().link}">${activities[i].data().title}</a>`
        }
        if (activities[i].data().category == 6){
            programe.innerHTML += `<a target = "_blank" href = "${activities[i].data().link}">${activities[i].data().title}</a>`
        }
        if (activities[i].data().category == 7){
            note.innerHTML += `<a target = "_blank" href = "${activities[i].data().link}">${activities[i].data().title}</a>`
        }

    }
});