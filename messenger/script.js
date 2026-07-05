let messageArea = document.getElementById("messengerArea");
let message = document.getElementById("text");
let button = document.getElementById("buttonSubmit");
let nick = document.getElementById("name");

button.addEventListener("click", () => {
    let nickValue = nick.value
    let messageValue = message.value;
    let apearedWarning = document.getElementById("warning")

    if (messageValue === "" || nickValue === "") {
        if (!apearedWarning) {
            let warning = document.createElement("p");
            warning.id = "warning";
            warning.textContent = "введите сообщение и имя";
            messageArea.appendChild(warning);
        }
        return
    }

    let messageWrapper = document.createElement("div");
    messageWrapper.textContent = `${nickValue}:` + " " + messageValue;
    messageArea.appendChild(messageWrapper);
    message.value = "";
})