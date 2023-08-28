let prescolare = document.getElementById("prescolare");
let preuniversitare = document.getElementById("preuniversitare");
let extrascolare = document.getElementById("extrascolare");

function compar(a,b){
    return b.data().date_posted - a.data().date_posted;
}

mngedDb.onSnapshot((snapshot) => {
    managements = snapshot.docs;
    managements.sort(compar);

    prescolare.innerHTML = "";
    preuniversitare.innerHTML = "";
    extrascolare.innerHTML = "";

    for (let i = 0;i < managements.length;i++){

        if (managements[i].data().link == "nodisplay123456789321453")
        {
            continue;
        }
        if (managements[i].data().category == 1){
            prescolare.innerHTML += `<a target = "_blank" href = "${managements[i].data().link}">${managements[i].data().title}</a>`;
        }

        if (managements[i].data().category == 2){
            preuniversitare.innerHTML += `<a target = "_blank" href = "${managements[i].data().link}">${managements[i].data().title}</a>`;
        }

        if (managements[i].data().category == 3){
            extrascolare.innerHTML += `<a target = "_blank" href = "${managements[i].data().link}">${managements[i].data().title}</a>`;
        }
    }
});