const inputElement = document.getElementById('input');
const buttonElement = document.querySelector('button');
const titleElement = document.querySelector('.input_title');

inputElement.addEventListener('input', (event) => {
  if(event.target.value.length > 0){
    titleElement.style.color = "#549E69"
    inputElement.style.border = "2px solid #549E69"
    buttonElement.disabled = false;
  } else {
    titleElement.style.color = "#5760B1"
    inputElement.style.border = "2px solid #5760B1"
    buttonElement.disabled = true;
  }
  console.log(event.target.value)
})

inputElement.addEventListener('focusin', () => {
  if(inputElement.value.length > 0) { return }
  titleElement.style.top = "0%"
  titleElement.style.left = "0.5rem"
  titleElement.style.color = "#5760B1"
  inputElement.style.border = "2px solid #5760B1"
})
inputElement.addEventListener('focusout', () => {
  if(inputElement.value.length > 0) { return }
  titleElement.style.top = "50%"
  titleElement.style.left = "1rem"
  titleElement.style.color = "gray"
  inputElement.style.border = "2px solid gray"
})