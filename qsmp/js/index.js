const notOnFirstPage = sessionStorage.getItem("notOnFirstPage") ?? false;
const btnShowHideChat = document.querySelector(".show-hide-chat");

btnShowHideChat.addEventListener("click", () => {
  const chat = document.querySelector(".twitch-chat");

  if (chat.classList.contains("hidden")) {
    chat.classList.remove("hidden");
    btnShowHideChat.textContent = "Esconder o Chat";
  } else {
    chat.classList.add("hidden");
    btnShowHideChat.textContent = "Mostrar o Chat";
  }
});

/* typer */
function typeWriter(selector, paramSpeed) {
  var elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    var i = 0;
    var txt = element.dataset.text;
    var speed = paramSpeed;

    function type() {
      if (i < txt.length) {
        if (txt.substring(i, i + 2) === '\\n') {
          // create a new HTML break line element and append it to the current element
          var br = document.createElement('br');
          element.appendChild(br);
          i += 2;  // skip two characters
        } else {
          // create a new text node and append it to the current element
          var textNode = document.createTextNode(txt.charAt(i));
          element.appendChild(textNode);
          i++;
        }
        setTimeout(type, speed);
      }
    }

    type();
  });
}

// prevent to doing the typing animation twice
if (!notOnFirstPage) {
  sessionStorage.setItem("notOnFirstPage", true);
  typeWriter(".title-1", 100);
} else {
  document.querySelector(".title-1").innerHTML =
    document.querySelector(".title-1").dataset.text;
}
