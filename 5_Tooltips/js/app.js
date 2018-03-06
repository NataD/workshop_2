/**
 * Created by Jacek on 2015-12-16.
 */


/*
 <span class="tooltipText">Text tooltipa</span>
 */
document.addEventListener('DOMContentLoaded', function () {
   var tooltipElements = document.querySelectorAll('.tooltip'); //selecting all elements that have class="tooltip" on the page and saving them in a variable;
   //console.log(tooltipElements); // console.log used to check if correct elements are selected;

    //creating function for each element with class="tooltip"
    [...tooltipElements].forEach(function(element){
        //adding event listener to each element with class="tooltip" on mouseover
        element.addEventListener('mouseover', function (event) {
          var textTooltip = element.dataset.text; //variable stores value of the attribute data-text="";
           // console.log(tooltipText);

          var newSpan = document.createElement('span'); //create variable to hold new span element
          newSpan.classList.add('tooltipText'); //add class to style new span element
          newSpan.innerText = textTooltip; // add text to new span element
          element.appendChild(newSpan); //add new span element
           // console.log(newSpan); //console.log new span element to check that everything works fine

        });

        //adding event listener to each element with class="tooltip" on mouseout
        element.addEventListener('mouseout', function (event) {
            //console.log('Bye'); //console.log to check if event listener was added
            var removeSpan = element.querySelector('span');
            element.removeChild(removeSpan); //remove created new span element
        });

    });

});