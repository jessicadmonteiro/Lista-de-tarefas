let tasks = [
    {
      titulo: "Leva o Mufasa ao veterinário",
      tipo: "Urgente"
    }, 
    {
      titulo: "Consertar Computador",
      tipo: "prioritário"
    },    
    {
      titulo: "Ir a loja de utensílios domésticos",
      tipo: ""
    }   
]

const urgente = document.querySelector(".listaDeTarefaUrgente")

const prioritario = document.querySelector(".listaDeTarefaPrioritario")

const adicionais = document.querySelector(".listaDeTarefaAdicionais")


function listaTasks(lista, referenciaHtml){
  referenciaHtml.innerText = ""
  for(let i = 0; i < lista.length; i++){
    let tarefa = lista[i]
    if(tarefa.tipo == "Urgente"){
      let tarefaCriada = criarTarefas(tarefa)
      referenciaHtml.appendChild(tarefaCriada)
    }
  }
}
listaTasks(tasks, urgente)

function listaTasksPrioritario(lista, referenciaHtml){
  referenciaHtml.innerText = ""
  for(let i = 0; i < lista.length; i++){
    let tarefa = lista[i]
    if(tarefa.tipo == "prioritário"){
      let tarefaCriada = criarTarefas(tarefa)
      referenciaHtml.appendChild(tarefaCriada)
    }
  }
}
listaTasksPrioritario(tasks, prioritario)

function listaTasksAdicional(lista, referenciaHtml){
  referenciaHtml.innerText = ""
  for (let i = 0; i < lista.length; i++){
    let tarefa = lista[i]
    if(tarefa.tipo !== "Urgente" && tarefa.tipo !== "prioritário"){
      let tarefaCriada = criarTarefas(tarefa)
      referenciaHtml.appendChild(tarefaCriada)
    } 
  }
}
listaTasksAdicional(tasks, adicionais)


function criarTarefas(tarefa){
  
  let titulo = tarefa.titulo
  let tipo   = tarefa.tipo

  let tagLi     = document.createElement("li")
  let tagButton = document.createElement("button")
  let tagH5     = document.createElement("h5")
  let tagImg    = document.createElement("img")

  tagLi.classList.add("tarefa")
  tagButton.classList.add("bolinhas")
  if(tarefa.tipo == "Urgente"){
    tagButton.classList.add("bolinhasVermelhas")
  }
  if(tarefa.tipo == "prioritário"){
    tagButton.classList.add("bolinhasAmarela")
  }else{
    tagButton.classList.add("bolinhas")
  }
  tagImg.classList.add("lixeira")

  tagH5.innerText     = titulo
  tagImg.src          = "./img/lixeira.png"
  tagImg.alt          = "lixeira" 

  tagLi.appendChild(tagButton)
  tagLi.appendChild(tagH5)
  tagLi.appendChild(tagImg)

  return tagLi
}

const botao = document.querySelector(".botao")
const campos = document.querySelector(".campos")


function cadastrarTarefa (){
  let inputs = campos.children
  let novaTarefa = {}

  for(let i = 0;i < inputs.length; i++){
    
    let inputAtual = inputs[i]
    let inputName  = inputAtual.name
    let inputValue = inputAtual.value
    
   if(inputName){
    novaTarefa[inputName] = inputValue
    }
  } 
  tasks.push(novaTarefa)
  listaTasks(tasks, urgente)
  listaTasksPrioritario(tasks, prioritario)
  listaTasksAdicional(tasks, adicionais)
}
botao.addEventListener("click", cadastrarTarefa)

urgente.addEventListener("click", remover)
prioritario.addEventListener("click", remover) 
adicionais.addEventListener("click", remover)

function remover (event){
  
  let lixeira = event.target
  if(lixeira.tagName == "IMG"){
    let li = lixeira.closest("li")
    li.remove()
  }
  
}

