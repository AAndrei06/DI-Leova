let response_manage = document.getElementById("response-manage");
let state = document.getElementById("state");
let dits = document.getElementById("dits");
let evaluare = document.getElementById("evaluare");
let planuri = document.getElementById("planuri");
let activity = document.getElementById("activity");


reportDb.onSnapshot((snapshot) => {
    reports = snapshot.docs;
    response_manage.innerHTML = "";
    state.innerHTML = "";
    dits.innerHTML = "";
    evaluare.innerHTML = "";
    planuri.innerHTML = "";
    activity.innerHTML = "";

    for (let i = 0;i < reports.length;i++){
        if (reports[i].data().category == 1){
            response_manage.innerHTML += `<a target = "_blank" href = "${reports[i].data().link}">${i+1}.${reports[i].data().title}</a>`
        }
        if (reports[i].data().category == 2){
            state.innerHTML += `<a target = "_blank" href = "${reports[i].data().link}">${i+1}.${reports[i].data().title}</a>`
        }
        if (reports[i].data().category == 3){
            dits.innerHTML += `<a target = "_blank" href = "${reports[i].data().link}">${i+1}.${reports[i].data().title}</a>`
        }
        if (reports[i].data().category == 4){
            evaluare.innerHTML += `<a target = "_blank" href = "${reports[i].data().link}">${i+1}.${reports[i].data().title}</a>`
        }
        if (reports[i].data().category == 5){
           planuri.innerHTML += `<a target = "_blank" href = "${reports[i].data().link}">${i+1}.${reports[i].data().title}</a>`
        }
        if (reports[i].data().category == 5){
            activitye.innerHTML += `<a target = "_blank" href = "${reports[i].data().link}">${i+1}.${reports[i].data().title}</a>`
        }

    }
});