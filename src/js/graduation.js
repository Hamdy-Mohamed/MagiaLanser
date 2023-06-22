(function GetMessage() {
  let messagesContainer = document.getElementById("message");
  let inputMessage = document.querySelector(".input_message");
  let sendBtn = document.querySelector(".send_btn");

  let previousMessages = [];

  function createMessage() {
    let userMessage = inputMessage.value;

    if (userMessage !== "") {
      let newMessage = document.createElement("div");
      newMessage.innerHTML = userMessage;
      newMessage.classList.add("message");
      messagesContainer.appendChild(newMessage);
      inputMessage.value = "";

      newMessage.style.background = "#163850";
      newMessage.style.margin = "5rem";
      newMessage.style.width = "30%";
      newMessage.style.minHeight = "6rem";
      newMessage.style.borderRadius = "10px";
      newMessage.style.padding = "1rem";
      newMessage.style.overflow = "hidden";
      newMessage.style.display = "flex";
      newMessage.style.flexDirection = "column";
      newMessage.style.color = "white";
      newMessage.style.marginTop = "10rem";

      previousMessages.push(userMessage);

    }
  }

  sendBtn.addEventListener("click", createMessage);
})();
