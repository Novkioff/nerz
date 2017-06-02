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

var openModal = document.querySelector(".write");
console.log(openModal);
var closeModal = document.querySelector(".close");
var modal = document.querySelector(".write_us");

openModal.addEventListener("click", function() {
    modal.classList.add("open_modal");
});

closeModal.addEventListener("click", function() {
    modal.classList.remove("open_modal");
});
