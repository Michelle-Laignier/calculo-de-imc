export const Warning = {
    element: document.querySelector(".warning"),
    open() {
        Warning.element.classList.add("warning-open")
    },
    close() {
        Warning.element.classList.remove("warning-open")
    }
}