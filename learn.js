let body = document.getElementById('body');
let form = document.getElementById('taskForm');
let input = document.getElementById('inputTask');
let button = document.getElementById('btn');
let list = document.getElementById('listTask');

let tasks = JSON.parse(localStorage.getItem('task')) || []; // string -> object/array
renderTask();

form.addEventListener('submit', function(e){
    e.preventDefault();
    let task = input.value.trim();
    if(task === "") return;

    tasks.push(task);
    localStorage.setItem("task", JSON.stringify(tasks)); // object/array -> string
    input.value = "";
    renderTask();
})

function renderTask(){
    list.innerHTML = "";

    tasks.forEach(function(task,index){
        let div = document.createElement('div');
        let li = document.createElement('li');
        let h1 = document.createElement('p');
        let doneBtn = document.createElement('button');
        
        h1.innerHTML = task;
        doneBtn.innerHTML = 'done';
        doneBtn.style.marginLeft = '10px';
        div.setAttribute('id', 'div');

        h1.setAttribute('id','not-done');
        doneBtn.addEventListener('click', function(){
            if(h1.id == 'not-done'){
                doneBtn.innerHTML = 'not-done';
                h1.id = 'done';
            }
            else{
                doneBtn.innerHTML = 'done';
                h1.id = 'not-done';
            }
        })

        let deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('id', 'deleteBtn');
        deleteBtn.innerHTML = '❌';
        deleteBtn.style.marginLeft = '10px';

        deleteBtn.addEventListener('click', function(){
            tasks.splice(index, 1); // removing item
            localStorage.setItem('task', JSON.stringify(tasks));
            renderTask();
        })

        div.appendChild(li);
        li.appendChild(h1);
        li.appendChild(doneBtn);
        li.appendChild(deleteBtn);
        list.appendChild(div);
    })
}

function clearAll(){
    if(list.innerHTML !== ""){
        let clearBtn = document.createElement('button');

        clearBtn.innerHTML = 'clear all task';


        clearBtn.addEventListener('click', function(){
            list.innerHTML = "";
            body.removeChild(clearBtn);
        })

        body.appendChild(clearBtn);
    }
}

clearAll();