/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener('DOMContentLoaded', function(){

    var gallery = document.querySelector('#gallery');
    console.log(gallery);
    var images = document.querySelectorAll('img');
    console.log(images);

    var showBtn = document.querySelector('#showButton');
    console.log(showBtn);

    var hideBtn = document.querySelector('#hideButton');
    console.log(hideBtn);

    var inputField = document.querySelector('#tagInput');
    console.log(inputField);

    showBtn.addEventListener('click', function (event) {

        //write input value to variable
        var inputText = inputField.value;
        console.log(inputText);

        //clean input
        inputField.value = '';

        [...images].forEach(function (element) {
            //var imagesTags = [];
            //imagesTags.push(element.dataset.tag);
           //console.log(imagesTags);
            var imagesTags = element.dataset.tag;
            //console.log(imagesTags.indexOf(inputText));

            if(imagesTags.indexOf(inputText) !== -1){
                //console.log(imagesTags);
                //images.hasAttribute('data-tag', inputText)
                element.classList.remove('invisible');
            } else {
                element.classList.add('invisible');
            }

        });

    });


    hideBtn.addEventListener('click', function (event) {
       // console.log('Hello');

        //write inout value to variable
        var inputText = inputField.value;
        console.log(inputText);

        //clean input
        inputField.value = '';

        [...images].forEach(function (element) {
            //var imagesTags = [];
            //imagesTags.push(element.dataset.tag);
            //console.log(imagesTags);
            var imagesTags = element.dataset.tag;
            //console.log(imagesTags.indexOf(inputText));

            if(imagesTags.indexOf(inputText) !== -1){
                //console.log(imagesTags);
                //images.hasAttribute('data-tag', inputText)
                element.classList.add('invisible');
            }

        });

    });
});
