var yes = document.getElementById("yes")
var no = document.getElementById("no")
var text = document.getElementById("texts")
var btns = document.getElementById("btns")
var vid = document.getElementById("vid")
var box = document.getElementById("box")
var clickCounter = 0

yes.onclick = function (evt) {
    clickCounter++
    if (clickCounter == 1) {
        text.textContent = "Are you sure?"
    }

    else if (clickCounter == 2) {
        text.textContent = "Ok, get ready!"
        box.style.display = "none"
        vid.style.display = "block"
        vid.play()
    }
}

no.addEventListener("click", (evt) => {
    text.textContent = "Nigger is looking to you!"
})