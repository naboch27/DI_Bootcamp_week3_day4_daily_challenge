/***
 * 
 * 
 */

let tasks = [];
let addform = document.getElementById("addform")

let addButton = document.querySelectorAll("button")[0]

addButton.addEventListener("click", addTask)

function addTask() {

    let verifInput = document.querySelectorAll("input")[0]
    //let icon = "<i class="fa fa-times" aria-hidden="true"></i>"
    if (verifInput.value != 0) {

        tasks.push(verifInput.value)

        // console.log(tasks)
        addform.reset()

        console.log("takss", tasks) 

        let input = document.createElement("input")

        input.setAttribute("type", "checkbox");

        let showCheckBox = input.inputMode + tasks

        let listTasks = document.querySelector(".listTasks")

        listTasks.append(showCheckBox)

    }

}
/*
var x = document.createElement("INPUT");
x.setAttribute("type", "checkbox");
document.body.appendChild(x);*/