
document.body.style.display = "block";
let event_image = document.getElementById("link-image-event");
let content_event = document.getElementById("content-of-event");
let post_event_btn = document.getElementById("news-create-btn");

post_event_btn.addEventListener("click",() => {
    let date = new Date();

    let event = {
        image:event_image.value,
        content:content_event.value,
        date_posted:date.getTime(),
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

post_activity_btn.addEventListener("click",() => {
    let date1 = new Date();
    let activity = {
        category:activity_category.value,
        title:title_activity.value,
        link:link_activity.value,
        date_posted:date1.getTime(),
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

post_report_btn.addEventListener("click",() => {
    let date2 = new Date();

    let report = {
        category:report_category.value,
        title:title_report.value,
        link:link_report.value,
        date_posted:date2.getTime(),
    }

    reportDb.add(report).then(() => {
        alert("Raport postat cu succes!!!");
        report_category.value = "";
        title_report.value = "";
        link_report.value = "";
    });
});