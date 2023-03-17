// funcao que adiciona tarefa

function addTask(){

    // titulo da tarefa
    const taskTitle = document.querySelector("#task-title").value;

    // verifica se o titulo da tarefa foi preenchido
    if(taskTitle){

        // template
        const template = document.querySelector(".template");

        // clona o template
        const newTask = template.cloneNode(true);

        // adiciona titulo
        newTask.querySelector(".task-title").textContent = taskTitle;

        // remove classes desnecessarias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        // adiciona tarefa na lista
        const list = document.querySelector("#task-list");
        list.appendChild(newTask);

        // adiciona evento de remover tarefa
        const removeBtn = newTask.querySelector(".remove-task").addEventListener("click", function(e){
            removeTask(this);
        });

        // adiciona o evento completar tarefa
        const doneBtn = newTask.querySelector(".done-task").addEventListener("click", function(e){
            doneTask(this);
        });

        // limpa o campo de texto
        document.querySelector("#task-title").value = "";
    }
}

// funcao que remove tarefa
function removeTask(task){
    
    // acessa o elemento pai e o remove
    task.parentNode.remove(true);
}

// funcao que completa tarefa
function doneTask(task){

    // acessa o elemento pai
    const taskToComplete = task.parentNode;

    // se tiver a classe done ele retira, se nao tiver ele adiciona
    taskToComplete.classList.toggle("done");
}


// evento de adicionar tarefa
const addBtn = document.querySelector("#btn");

addBtn.addEventListener("click", function (e) {

    e.preventDefault(); // impede que o formulario seja enviado para o servidor

    addTask();
});