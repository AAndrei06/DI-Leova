if (prompt("Introdu Parola") == "dileova2023admin") {
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



    let mnged_category = document.getElementById("number-of-management");
    let title_mnged = document.getElementById("title-of-management");
    let link_mnged = document.getElementById("link-of-management");
    let post_mnged_btn = document.getElementById("mng-create-btn");

    post_mnged_btn.addEventListener("click", () => {

        let date3 = new Date();

        let mnged = {

            category: mnged_category.value,
            title: title_mnged.value,
            link: link_mnged.value,
            date_posted: date3.getTime(),
        }

        mngedDb.add(mnged).then(() => {
            alert("Management postat cu succes!!!");
            mnged_category.value = "";
            title_mnged.value = "";
            link_mnged.value = "";
        });

    });


    let transport_category = document.getElementById("number-of-transport");
    let title_transport = document.getElementById("title-of-transport");
    let link_transport = document.getElementById("link-of-transport");
    let post_transport_btn = document.getElementById("transport-create-btn");


    post_transport_btn.addEventListener("click", () => {

        let date4 = new Date();

        let transport = {
            category: transport_category.value,
            title: title_transport.value,
            link: link_transport.value,
            date_posted: date4.getTime(),
        }

        transportDb.add(transport).then(() => {

            alert("Transport postat cu succes!!!");
            transport_category.value = "";
            title_transport.value = "";
            link_transport.value = "";
        });

    });


    let tabara_category = document.getElementById("number-of-tabara");
    let title_tabara = document.getElementById("title-of-tabara");
    let link_tabara = document.getElementById("link-of-tabara");
    let post_tabara_btn = document.getElementById("tabara-create-btn");


    post_tabara_btn.addEventListener("click", () => {

        let date5 = new Date();

        let tabara = {
            category: tabara_category.value,
            title: title_tabara.value,
            link: link_tabara.value,
            date_posted: date5.getTime(),
        }

        tabaraDb.add(tabara).then(() => {

            alert("Tabara postata cu succes!!!");
            tabara_category.value = "";
            title_tabara.value = "";
            link_tabara.value = "";
        });

    });


    let sap_category = document.getElementById("number-of-SAP");
    let title_sap = document.getElementById("title-of-SAP");
    let link_sap = document.getElementById("link-of-SAP");
    let post_sap_btn = document.getElementById("SAP-create-btn");


    post_sap_btn.addEventListener("click", () => {

        let date6 = new Date();

        let sap = {
            category: sap_category.value,
            title: title_sap.value,
            link: link_sap.value,
            date_posted: date6.getTime(),
        }

        sapDb.add(sap).then(() => {

            alert("SAP postat cu succes!!!");
            sap_category.value = "";
            title_sap.value = "";
            link_sap.value = "";
        });

    });


    let title_link = document.getElementById("title-of-link-util");
    let link_link = document.getElementById("link-of-link-util");
    let post_link_btn = document.getElementById("link-create-btn");


    post_link_btn.addEventListener("click", () => {

        let date7 = new Date();

        let link = {
            title: title_link.value,
            link: link_link.value,
            date_posted: date7.getTime(),
        }

        linksDb.add(link).then(() => {

            alert("Link util postat cu succes!!!");
            title_link.value = "";
            link_link.value = "";
        });

    });



    let photo_change = document.getElementById("link-of-photo-contact");
    let edit_contact = document.getElementById("photo-edit-btn");

    edit_contact.addEventListener("click", () => {

        let photo_contact = contactDb.doc("oUqU7Lzk3Fh8bPtXjpVr").get().then((doc) => {

            let update_contact = {
                photo: document.getElementById("link-of-photo-contact").value,
            }

            contactDb.doc("oUqU7Lzk3Fh8bPtXjpVr").update(update_contact).then(() => {
                alert("Fotografie modificată cu succes!");
                document.getElementById("link-of-photo-contact").value = "";
            });
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
            if (events[i].data().image == "nodisplay123456789321453") {
                continue;
            }

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
            if (activities[i].data().link == "nodisplay123456789321453") {
                continue;
            }
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
            if (reports[i].data().link == "nodisplay123456789321453") {
                continue;
            }
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

    let mnged_group = document.getElementById("mnged-delete");

    mngedDb.onSnapshot((snapshot) => {

        let managements = snapshot.docs;
        mnged_group.innerHTML = "";
        managements.sort(compar);

        for (let i = 0; i < managements.length; i++) {
            if (managements[i].data().link == "nodisplay123456789321453") {
                continue;
            }

            mnged_group.innerHTML += `
            <div class = "activity-delete-object">
                <div class = "content-activity-delete">
                    <a href = "${managements[i].data().link}">${managements[i].data().title}</a>
                </div>
                <div class = "btn-delete">
                    <button class = "activity-delete-btn" value = "${managements[i].id}" id = "mnged-del-btn">Șterge Managementul</button>
                </div>
            </div>
            `;
        }

        let btns_mnged = document.querySelectorAll("#mnged-del-btn");

        for (let i = 0; i < btns_mnged.length; i++) {
            btns_mnged[i].addEventListener('click', function () {
                if (confirm("Sunteți sigur că doriți să ștergeți acest management?") == true) {
                    mngedDb.doc(btns_mnged[i].value).delete().then(() => {
                        alert("Managementul a fost șters cu succes!!!");
                    });
                }
            });
        }

    });




    let transport_group = document.getElementById("transport-delete");

    transportDb.onSnapshot((snapshot) => {

        let transports = snapshot.docs;
        transport_group.innerHTML = "";
        transports.sort(compar);

        for (let i = 0; i < transports.length; i++) {
            if (transports[i].data().link == "nodisplay123456789321453") {
                continue;
            }

            transport_group.innerHTML += `
            <div class = "activity-delete-object">
                <div class = "content-activity-delete">
                    <a href = "${transports[i].data().link}">${transports[i].data().title}</a>
                </div>
                <div class = "btn-delete">
                    <button class = "activity-delete-btn" value = "${transports[i].id}" id = "transport-del-btn">Șterge Transport</button>
                </div>
            </div>
            `;
        }

        let btns_transport = document.querySelectorAll("#transport-del-btn");

        for (let i = 0; i < btns_transport.length; i++) {
            btns_transport[i].addEventListener('click', function () {
                if (confirm("Sunteți sigur că doriți să ștergeți acest transport?") == true) {
                    transportDb.doc(btns_transport[i].value).delete().then(() => {
                        alert("Transportul a fost șters cu succes!!!");
                    });
                }
            });
        }

    });

    let tabara_group = document.getElementById("tabara-delete");

    tabaraDb.onSnapshot((snapshot) => {

        let tabara = snapshot.docs;
        tabara_group.innerHTML = "";
        tabara.sort(compar);

        for (let i = 0; i < tabara.length; i++) {
            if (tabara[i].data().link == "nodisplay123456789321453") {
                continue;
            }

            tabara_group.innerHTML += `
            <div class = "activity-delete-object">
                <div class = "content-activity-delete">
                    <a href = "${tabara[i].data().link}">${tabara[i].data().title}</a>
                </div>
                <div class = "btn-delete">
                    <button class = "activity-delete-btn" value = "${tabara[i].id}" id = "tabara-del-btn">Șterge Tabara</button>
                </div>
            </div>
            `;
        }

        let btns_tabara = document.querySelectorAll("#tabara-del-btn");

        for (let i = 0; i < btns_tabara.length; i++) {
            btns_tabara[i].addEventListener('click', function () {
                if (confirm("Sunteți sigur că doriți să ștergeți această informatie despre tabară?") == true) {
                    tabaraDb.doc(btns_tabara[i].value).delete().then(() => {
                        alert("Informatia despre tabara a fost ștearsă cu succes!!!");
                    });
                }
            });
        }

    });



    let sap_group = document.getElementById("sap-delete");

    sapDb.onSnapshot((snapshot) => {

        let sap = snapshot.docs;
        sap_group.innerHTML = "";
        sap.sort(compar);

        for (let i = 0; i < sap.length; i++) {
            if (sap[i].data().link == "nodisplay123456789321453") {
                continue;
            }

            sap_group.innerHTML += `
            <div class = "activity-delete-object">
                <div class = "content-activity-delete">
                    <a href = "${sap[i].data().link}">${sap[i].data().title}</a>
                </div>
                <div class = "btn-delete">
                    <button class = "activity-delete-btn" value = "${sap[i].id}" id = "sap-del-btn">Șterge SAP</button>
                </div>
            </div>
            `;
        }

        let btns_sap = document.querySelectorAll("#sap-del-btn");

        for (let i = 0; i < btns_sap.length; i++) {
            btns_sap[i].addEventListener('click', function () {
                if (confirm("Sunteți sigur că doriți să ștergeți această informatie despre SAP?") == true) {
                    sapDb.doc(btns_sap[i].value).delete().then(() => {
                        alert("Informatia despre SAP a fost ștearsă cu succes!!!");
                    });
                }
            });
        }

    });



    let links_group = document.getElementById("link-util-delete");

    linksDb.onSnapshot((snapshot) => {

        let links = snapshot.docs;
        links_group.innerHTML = "";
        links.sort(compar);

        for (let i = 0; i < links.length; i++) {
            if (links[i].data().link == "nodisplay123456789321453") {
                continue;
            }

            links_group.innerHTML += `
            <div class = "activity-delete-object">
                <div class = "content-activity-delete">
                    <a href = "${links[i].data().link}">${links[i].data().title}</a>
                </div>
                <div class = "btn-delete">
                    <button class = "activity-delete-btn" value = "${links[i].id}" id = "link-del-btn">Șterge Link Util</button>
                </div>
            </div>
            `;
        }

        let btns_links = document.querySelectorAll("#link-del-btn");

        for (let i = 0; i < btns_links.length; i++) {
            btns_links[i].addEventListener('click', function () {
                if (confirm("Sunteți sigur că doriți să ștergeți acest link util?") == true) {
                    linksDb.doc(btns_links[i].value).delete().then(() => {
                        alert("Link util șters cu succes!!!");
                    });
                }
            });
        }

    });




} else {
    window.location = "../home.html";
}