// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form")

form.addEventListener("submit", handleStartProcess)

function handleStartProcess(event) {
    event.preventDefault()
    const delayValue = parseInt(event.target.delay.value);
    const stateValue = event.target.state.value;
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (stateValue === 'fulfilled') {
                resolve(delayValue)
            } else {
                reject(delayValue)
            }
        }, delayValue);
    })
        .then((delayValue) => {
            iziToast.success({
                title: 'Success',
                message: `Promise fulfilled after ${delayValue} ms`,
                position: "topRight",
            });
        })
        .catch((delayValue) => {
            iziToast.error({
                title: 'Error',
                message: `Promise rejected after ${delayValue} ms`,
                position: "topRight",
            });
        });
}