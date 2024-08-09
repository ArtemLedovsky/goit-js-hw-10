let formData = {
    email: "",
    message: "",
}
const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input[name="email"')
const inputTextArea = document.querySelector('textarea[name="message"]')



form.addEventListener("input", handleFormInput)
form.addEventListener("submit", handleFormSubmit)


function handleFormInput(event) {
    const currentEmail = event.currentTarget.elements.email.value;
    const currentMessage = event.currentTarget.elements.message.value;


    formData.email = currentEmail;
    formData.message = currentMessage;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
    

}

function handleFormSubmit(event) {
    event.preventDefault()
    const savedEmail = event.currentTarget.elements.email.value;
    const savedMessage = event.currentTarget.elements.message.value;
    if (savedEmail === "" || savedMessage === "") {
       return alert("Fill please all fields")
       
    }
    
    formData.email = savedEmail;
    formData.message = savedMessage;

    console.log(formData);

    formData = { email: "", message: "", }
    localStorage.removeItem(STORAGE_KEY)
        event.currentTarget.reset()
}

const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY))
if (savedData) {
    inputEmail.value = savedData.email;
    inputTextArea.value = savedData.message;
}

