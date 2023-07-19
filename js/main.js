import { Modal } from "../js/modal.js"
import { Warning } from "../js/warning.js"
import { calcIMC, notANumber } from "../js/functions.js"

const form = document.querySelector("form")
const fieldset = document.querySelector("fieldset")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")
const warning = document.querySelector(".warning")

form.onsubmit = function (event) {
    event.preventDefault()
    
    const weight = inputWeight.value
    const height = inputHeight.value
    
    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)
    if (weightOrHeightIsNotANumber) {
        Warning.open()
        warning.classList.add(".warning-open")
        return
    }

    const result = calcIMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage (result) {
    Modal.text.innerHTML = `Seu IMC é de ${result}`
    Modal.visible()
}

fieldset.addEventListener("keydown", (event) => {
    if (event.key >= 0 || event.key <= 9) {
        Warning.close()
    }
})

//outra forma:
//inputWeight.oninput = () => Warning.close()
//inputHeight.oninput = () => Warning.close()