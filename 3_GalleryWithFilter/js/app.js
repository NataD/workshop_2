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

    var inputText = document.querySelector('#tagInput');
    console.log(inputText);


    showBtn.addEventListener('click', function (event) {


        console.log('Hello');
    });


    hideBtn.addEventListener('click', function (event) {
        console.log('Hello');
    });
});
