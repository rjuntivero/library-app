const myLibrary = [];

function Book() {

}

function addBookToLibrary() {

}





var bookmark = document.querySelector(".library-card")
bookmark.addEventListener("click", function() {
    bookmark.classList.contains("show") ? bookmark.classList.remove("show") : bookmark.classList.add("show");
})


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
