const notOnFirstPage = sessionStorage.getItem("notOnFirstPage") ?? false;

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

typeWriter(".text-1", 200);
setTimeout(() => {
  typeWriter(".text-2", 200);
}, 6 * 1000);
setTimeout(() => {
  typeWriter(".text-3", 1000);
}, 12 * 1000);
setTimeout(() => {
  typeWriter(".text-4", 1000);
}, 15 * 1000);