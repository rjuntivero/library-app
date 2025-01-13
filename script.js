const myLibrary = [];

function Book() {

}

function addBookToLibrary() {

}








//Modal Open/Close
var modal = document.querySelector("#book-modal");
var modalBtn = document.querySelector("#modal-open");
var modalClose = document.querySelector("#modal-close");

modalBtn.addEventListener("click", () => {
    modal.classList.add("show");
  });

modalClose.onclick = () => {
    modal.classList.remove("show");
}

window.onclick = e => {
    if (e.target == modal) {
        modal.classList.remove("show");
    }
}
