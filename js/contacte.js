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

sendBtn.addEventListener("click",() => {
    let count = 0;
    let email_fields = document.querySelectorAll(".field-email-dd");
    if (document.getElementById("name-input-form").value == ""){
        count++;
        email_fields[0].style.border = "solid red 1px";
    }else{
        email_fields[0].style.border = "none";
    }
    if (document.getElementById("email-adress-form").value == ""){
        count++;
        email_fields[1].style.border = "solid red 1px";
    }else{
        email_fields[1].style.border = "none";
    }
    if (document.getElementById("email-content-msg-form").value == ""){
        count++;
        email_fields[2].style.border = "solid red 1px";
    }else{
        email_fields[2].style.border = "none";
    }
    if (count == 0){
        
        sendMail();
    }
});