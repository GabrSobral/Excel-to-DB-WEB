const resultElement = document.querySelector(".result_container")

function loadFilledContainer(){
  resultElement.innerHTML = ""
  let spanElement = document.createElement('span')
  spanElement.className="data_value"
  spanElement.appendChild(
    document.createTextNode("RM: 34079"))
  resultElement.appendChild(spanElement)

  spanElement = document.createElement('span')
  spanElement.className="data_value"
  spanElement.appendChild(
    document.createTextNode("Nome: GABRIEL SOBRAL DOS SANTOS"))
  resultElement.appendChild(spanElement)

  spanElement = document.createElement('span')
  spanElement.className="data_value"
  spanElement.appendChild(
    document.createTextNode("Turma: 3N"))
  resultElement.appendChild(spanElement)

  spanElement = document.createElement('span')
  spanElement.className="data_value"
  spanElement.appendChild(
    document.createTextNode("Grupo: A"))
  resultElement.appendChild(spanElement)

  spanElement = document.createElement('span')
  spanElement.className="data_value"
  spanElement.appendChild(
    document.createTextNode("Desejo de volta: Sim"))
  resultElement.appendChild(spanElement)

  spanElement = document.createElement('span')
  spanElement.className="data_value"
  spanElement.appendChild(
    document.createTextNode("Acertos no protocolo: 13/13"))
  resultElement.appendChild(spanElement)

  const isAbleElement = document.createElement('div')
  let isAble = true;
  
  resultElement.style.boxShadow = "5px 5px 10px rgba(0, 0, 0, 0.26)"
  resultElement.style.border = `2px solid ${isAble ? "#549E69" : "#D2564E"}`
  isAbleElement.className=`is_able ${isAble ? "yes" : "no"}`
  resultElement.appendChild(isAbleElement)
}
document.getElementsByTagName('button')[0]
  .addEventListener('click', loadFilledContainer)