let response_manage = document.getElementById("response-manage");
let state = document.getElementById("state");
let dits = document.getElementById("dits");
let evaluare = document.getElementById("evaluare");
let activity = document.getElementById("activity");

function compar(a,b){
    return b.data().date_posted - a.data().date_posted;
}

reportDb.onSnapshot((snapshot) => {
    reports = snapshot.docs;
    reports.sort(compar);
    response_manage.innerHTML = "";
    state.innerHTML = "";
    dits.innerHTML = "";
    evaluare.innerHTML = "";
    activity.innerHTML = "";

    for (let i = 0;i < reports.length;i++){
        if (reports[i].data().link == "nodisplay123456789321453"){
            continue;
        }
        if (reports[i].data().category == 1){
            response_manage.innerHTML += `<a target = "_blank" href = "${reports[i].data().link}">${reports[i].data().title}</a>`
        }
        if (reports[i].data().category == 2){
            state.innerHTML += `<a target = "_blank" href = "${reports[i].data().link}">${reports[i].data().title}</a>`
        }
        if (reports[i].data().category == 3){
            dits.innerHTML += `<a target = "_blank" href = "${reports[i].data().link}">${reports[i].data().title}</a>`
        }
        if (reports[i].data().category == 4){
            evaluare.innerHTML += `<a target = "_blank" href = "${reports[i].data().link}">${reports[i].data().title}</a>`
        }
        if (reports[i].data().category == 5){
            activity.innerHTML += `<a target = "_blank" href = "${reports[i].data().link}">${reports[i].data().title}</a>`
        }

    }
});