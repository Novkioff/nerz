/**
 * Created by Кирилл on 31.05.2017.
 */


/*function show(param) {
    var writeUs = document.getElementById("write");
    if (param == 1) {
        if (writeUs.style.display == "block") {
            writeUs.style.display = "none";
        }
        else writeUs.style.display = "block";
    }
    else if (param == 2) {
        writeUs.style.display = "none";
    }
}*/

var modal = document.querySelector(".write_us"),
    openModal = document.querySelector(".write"),
    closeModal = modal.querySelector(".close"),
    form = modal.querySelector("form"),
    inputName = form.querySelector("#your_name"),
    mail = form.querySelector("#your_mail"),
    message = form.querySelector("#message"),
    inputStorage = localStorage.getItem("inputName"),
    mailStorage = localStorage.getItem("mail");



openModal.addEventListener("click", function() {
    modal.classList.add("open_modal");
    inputName.style.borderColor = "#d7dcde";
    mail.style.borderColor = "#d7dcde";
    message.style.borderColor = "#d7dcde";
    if (inputStorage) {
        inputName.value = inputStorage;
        mail.focus();
        if (mailStorage) {
            mail.value = mailStorage;
            message.focus();
        }
    }
    else {
        inputName.focus();
    }
});

closeModal.addEventListener("click", function() {
    modal.classList.remove("open_modal");
});

form.addEventListener("submit", function(evt) {
    if (!inputName.value || !mail.value || !message.value) {
        evt.preventDefault();
        inputName.style.borderColor = "#e74246";
        mail.style.borderColor = "#e74246";
        message.style.borderColor = "#e74246";
        alert("Пожалуйста заполните форму");
        if (inputName.value || mail.value) {
            inputName.style.borderColor = "#d7dcde";
            mail.style.borderColor = "#d7dcde";
        }

    }
    else {
        localStorage.setItem("inputName", inputName.value);
        localStorage.setItem("mail", mail.value);
    }
});

window.addEventListener("keydown", function(e) {
    if (e.keyCode == 27 && modal.classList.contains("open_modal")) {
        modal.classList.remove("open_modal");
    }
});





