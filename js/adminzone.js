
document.body.style.display = "block";
let event_image = document.getElementById("link-image-event");
let content_event = document.getElementById("content-of-event");
let post_event_btn = document.getElementById("news-create-btn");

post_event_btn.addEventListener("click", () => {
    let date = new Date();

    let event = {
        image: event_image.value,
        content: content_event.value,
        date_posted: date.getTime(),
    }

    eventsDb.add(event).then(() => {
        alert("Eveniment postat cu succes!!!");
        event_image.value = "";
        content_event.value = "";
    })
});

let activity_category = document.getElementById("number-of-activity");
let title_activity = document.getElementById("title-activity-input");
let link_activity = document.getElementById("link-activity-input");
let post_activity_btn = document.getElementById("activity-create-btn");

post_activity_btn.addEventListener("click", () => {
    let date1 = new Date();
    let activity = {
        category: activity_category.value,
        title: title_activity.value,
        link: link_activity.value,
        date_posted: date1.getTime(),
    }

    activityDb.add(activity).then(() => {
        alert("Activitate postată cu succes!!!");
        activity_category.value = "";
        title_activity.value = "";
        link_activity.value = "";
    });
});

let report_category = document.getElementById("number-of-report");
let title_report = document.getElementById("title-of-report");
let link_report = document.getElementById("link-of-report");
let post_report_btn = document.getElementById("report-create-btn");

post_report_btn.addEventListener("click", () => {
    let date2 = new Date();

    let report = {
        category: report_category.value,
        title: title_report.value,
        link: link_report.value,
        date_posted: date2.getTime(),
    }

    reportDb.add(report).then(() => {
        alert("Raport postat cu succes!!!");
        report_category.value = "";
        title_report.value = "";
        link_report.value = "";
    });
});

let events_group = document.getElementById("event-delete-id-group");

function compar(a, b) {
    return b.data().date_posted - a.data().date_posted;
}

eventsDb.onSnapshot((snapshot) => {
    let events = snapshot.docs;
    events_group.innerHTML = "";
    events.sort(compar);
    for (let i = 0; i < events.length; i++) {
        events_group.innerHTML += `
        <div class="event-delete">
            <div class="event-image">
                <img src="${events[i].data().image}" width="100%" height="150">
            </div>
            <div class="content-event-delete">
                <p>${events[i].data().content.slice(0, 200)}</p>
            </div>
            <button class="delete-event-btn" value = "${events[i].id}">Șterge Evenimentul</button>
        </div>
        `;
    }

    let btns_event = document.querySelectorAll(".delete-event-btn");

    for (let i = 0; i < btns_event.length; i++) {
        btns_event[i].addEventListener('click', function () {
            if (confirm("Sunteți sigură că doriți să ștergeți acest eveniment?") == true) {
                eventsDb.doc(btns_event[i].value).delete().then(() => {
                    alert("Evenimentul a fost șters cu succes!!!");
                });
            }
        });
    }
});

let activities_group = document.getElementById("activity-delete");

activityDb.onSnapshot((snapshot) => {
    let activities = snapshot.docs;
    activities_group.innerHTML = "";
    activities.sort(compar);
    for (let i = 0; i < activities.length; i++) {
        activities_group.innerHTML += `
        <div class = "activity-delete-object">
            <div class = "content-activity-delete">
                <a href = "${activities[i].data().link}">${activities[i].data().title}</a>
            </div>
            <div class = "btn-delete">
            <button class = "activity-delete-btn" value = "${activities[i].id}" id = "activity-del-btn">Șterge Activitatea</button>
            </div>
        </div>
        `;
    }

    let btns_activities = document.querySelectorAll("#activity-del-btn");

    for (let i = 0; i < btns_activities.length; i++) {
        btns_activities[i].addEventListener('click', function () {
            if (confirm("Sunteți sigură că doriți să ștergeți acestă activitate?") == true) {
                activityDb.doc(btns_activities[i].value).delete().then(() => {
                    alert("Activitatea a fost ștearsă cu succes!!!");
                });
            }
        });
    }
});

let reports_group = document.getElementById("report-delete");

reportDb.onSnapshot((snapshot) => {
    let reports = snapshot.docs;
    reports_group.innerHTML = "";
    reports.sort(compar);
    for (let i = 0; i < reports.length; i++) {
        reports_group.innerHTML += `
        <div class = "activity-delete-object">
            <div class = "content-activity-delete">
                <a href = "${reports[i].data().link}">${reports[i].data().title}</a>
            </div>
            <div class = "btn-delete">
                <button class = "activity-delete-btn" value = "${reports[i].id}" id = "report-del-btn">Șterge Raportul</button>
            </div>
        </div>
        `;
    }

    let btns_reports = document.querySelectorAll("#report-del-btn");

    for (let i = 0; i < btns_reports.length; i++) {
        btns_reports[i].addEventListener('click', function () {
            if (confirm("Sunteți sigur că doriți să ștergeți acest raport?") == true) {
                reportDb.doc(btns_reports[i].value).delete().then(() => {
                    alert("Raportul a fost șters cu succes!!!");
                });
            }
        });
    }
});