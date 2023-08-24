let sendBtn = document.getElementById("send-email-btn");

function sendMail(){
    let params = {
        name:document.getElementById("name-input-form").value,
        email:document.getElementById("email-adress-form").value,
        message:document.getElementById("email-content-msg-form").value,
    }

    const serviceID = "service_92gz8ji";
    const templateID = "template_k99vir1";

    emailjs.send(serviceID,templateID,params).then(() => {
        document.getElementById("name-input-form").value = "";
        document.getElementById("email-adress-form").value = "";
        document.getElementById("email-content-msg-form").value = "";
        sendBtn.innerHTML = "Trimis";
        setTimeout(() =>{
            sendBtn.innerHTML = "Trimite";
        },5000);
    });
}

sendBtn.addEventListener("click",sendMail);