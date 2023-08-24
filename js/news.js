let events_container = document.querySelector(".news-container");
function compar(a,b){
    return b.data().date_posted - a.data().date_posted;
}
eventsDb.onSnapshot((snapshot) => {
    events_container.innerHTML = "";
    let html = "";
    let docs = snapshot.docs;
    docs.sort(compar);
    for (let i = 0;i < docs.length;i++){
        html += `
        <div class = "news-object">
            <div class = "image-of-news">
                <img src = "${docs[i].data().image}" width="100%" height="150">
            </div>
            <div class = "content-of-news">
                <p>${docs[i].data().content}</p>
            </div>
            <div class = "date-posted">${formatareData(docs[i].data().date_posted)}</div>
        </div>
        `;
    }
    events_container.innerHTML = html;
});