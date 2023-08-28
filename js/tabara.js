let echipa = document.getElementById("team");
let activitate = document.getElementById("activitate-t");


function compar(a,b){
    return b.data().date_posted - a.data().date_posted;
}

tabaraDb.onSnapshot((snapshot) => {
    tabara = snapshot.docs;
    tabara.sort(compar);
    echipa.innerHTML = "";
    activitate.innerHTML = "";


    for (let i = 0;i < tabara.length;i++){
        if (tabara[i].data().link == "nodisplay123456789321453"){
            continue;
        }
        if (tabara[i].data().category == 1){
            echipa.innerHTML += `<a target = "_blank" href = "${tabara[i].data().link}">${tabara[i].data().title}</a>`
        }
        if (tabara[i].data().category == 2){
            activitate.innerHTML += `<a target = "_blank" href = "${tabara[i].data().link}">${tabara[i].data().title}</a>`
        }
    }
});