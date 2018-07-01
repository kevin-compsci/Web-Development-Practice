function createParagraph() {
  var paragraph = document.createElement('p');
  paragraph.textContent = "You clicked me!";
  document.body.appendChild(paragraph);
}

var buttons = document.querySelectorAll('button');
for(var i=0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', createParagraph);
}