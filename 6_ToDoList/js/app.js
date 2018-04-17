/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener('DOMContentLoaded', function () {

    var addBtn = document.querySelector('#addTaskButton'); //variable to store a button responsible for adding elements to list
    var inputField = document.querySelector('#taskInput'); //variable to store an input;
    var taskList = document.querySelector('#taskList'); //variable to store <li> elements added to list
    var listItems = taskList.children;
    var removeAll = document.querySelector('#removeFinishedTasksButton'); //variable to store button that removes completed tasks
    var counter = document.querySelector('#counter');
    var countTasks = 0; //variable to be assigned to counter span;
    counter.innerText = countTasks;
    console.log(addBtn);
    console.log(inputField);
    console.log(taskList);


    addBtn.addEventListener('click', function (event) {
        //write input value to variable
        var inputText = inputField.value;
        console.log(inputText);

        //clean input
        inputField.value = '';

        //code to add new elements to the list
        var newListElement = document.createElement('li');


        var newTask = document.createElement('h1');
        newTask.innerText = inputText;
        newListElement.appendChild(newTask);

        //set requirement for adding new task
        if (newTask.innerText.length > 5 && newTask.innerText.length < 100){
           taskList.appendChild(newListElement);
           countTasks += 1;
           counter.innerText = countTasks;
        };

        var deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete task';
        deleteBtn.classList.add('deleted');
        newListElement.appendChild(deleteBtn);

        //code to delete tasks from list
        deleteBtn.addEventListener('click', function (event) {
           taskList.removeChild(newListElement);
           if (countTasks <= 0){
             countTasks = 0;
           } else {
            countTasks -= 1;
            counter.innerText = countTasks;
            }
        });

        var completeBtn = document.createElement('button');
        completeBtn.innerText = 'Complete task';
        newListElement.appendChild(completeBtn);

        //change color of completed tasks
        completeBtn.addEventListener('click', function (event) {
            //check if list element is completed

            if (newListElement.className === 'completed'){
                newListElement.classList.remove('completed');
            } else {
                newListElement.classList.add('completed');
                countTasks -= 1;
                counter.innerText = countTasks;
            }

        });


        //code to remove all completed tasks
        removeAll.addEventListener('click', function (event) {
            removeFinishedTasks(listItems);
        });

        function removeFinishedTasks(listItems) {
          [...listItems].forEach(function(element) {
          if (element.className === 'completed') {
              element.parentElement.removeChild(element);
          }
       });
   }

    });

});
