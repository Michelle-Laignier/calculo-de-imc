//object literal
export const Modal = {
    div: document.querySelector(".modal-div"),
    text: document.querySelector("h2"),
    buttonX: document.querySelector("#modal-button"),

    visible() {
        Modal.div.classList.remove("hide")
    },
    invisible() {
        Modal.div.classList.add("hide")
    }
}

Modal.buttonX.addEventListener("click", () => {
    Modal.invisible()
})

document.addEventListener("keydown", (event) => {
    if (event.key == "Escape") {
        Modal.invisible()
    }
})