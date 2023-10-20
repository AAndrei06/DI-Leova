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
        if (docs[i].data().image == "nodisplay123456789321453"){
            continue;
        }
        html += `
        <div class = "news-object">
            <div class = "image-of-news">
                <img src = "${docs[i].data().image}" width="100%" height="270">
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


let swiper_container = document.querySelectorAll(".swiper-wrapper");

sliderDb.onSnapshot((snapshot) => {
    for (let i = 0;i < swiper_container.length;i++){
        swiper_container[i].innerHTML = "";
    }

    let html = "";
    let docs = snapshot.docs;
    docs.sort(compar);
    for (let i = 0;i < docs.length;i++){
        if (docs[i].data().link == "nodisplay123456789321453"){
            continue;
        }
        html += `
        <div class="swiper-slide">
            <img src="${docs[i].data().link}"/>
        </div>
        `;
    }

    for (let i = 0;i < swiper_container.length;i++){
        swiper_container[i].innerHTML = html;
    }

    var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        
        thumbs: {
          swiper: swiper,
        },
      });

});
/*
var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });*/