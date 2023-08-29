let links_imp = document.getElementById("links-imp");


function compar(a,b){
    return b.data().date_posted - a.data().date_posted;
}

linksDb.onSnapshot((snapshot) => {
    links = snapshot.docs;
    links.sort(compar);
    links_imp.innerHTML = "";


    for (let i = 0;i < links.length;i++){
        if (links[i].data().link == "nodisplay123456789321453"){
            continue;
        }
        links_imp.innerHTML += `<a target = "_blank" href = "${links[i].data().link}">${links[i].data().title}</a>`
    }
});