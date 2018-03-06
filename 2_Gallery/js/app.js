/**
 * Created by Jacek on 2015-12-16.
 */

/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */
document.addEventListener('DOMContentLoaded', function () {
console.log("hello");

   var listElements = document.querySelectorAll('li');
   console.log(listElements);

   var body = document.querySelector('body');
    console.log(body);

   var images = document.querySelectorAll('img');

   function addElement (newEl){
        var fullScreen = document.createElement('div');
        var newImage = document.createElement('img');
        var newButton = document.createElement('button');

        body.appendChild(fullScreen);
        fullScreen.appendChild(newImage);
        newImage.setAttribute('src');
        fullScreen.appendChild(newButton);
        newButton.classList.add('close');
   }

    function showImages(img){

    }

    [...images].forEach(function (element) {
        element.addEventListener('click', function (event) {

            var source = this.getAttribute('src');
            var fullScreen = document.createElement('div');
            var newImage = document.createElement('img');
            var newButton = document.createElement('button');

            body.appendChild(fullScreen);
            fullScreen.classList.add('fullScreen');
            fullScreen.appendChild(newImage);

            newImage.setAttribute('src', source);
            fullScreen.appendChild(newButton);
            newButton.classList.add('close');


            newButton.addEventListener('click', function (event) {
                body.removeChild(fullScreen);
            });

        });
    })


});