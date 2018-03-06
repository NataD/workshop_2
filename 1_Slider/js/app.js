/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener('DOMContentLoaded', function () {

    var previous = document.querySelector('#prevPicture');
    console.log(previous);
    var next = document.querySelector('#nextPicture');
    console.log(next);

    var listElements = document.querySelectorAll('li');
    console.log(listElements);

    var listImages = document.querySelectorAll('img');
    console.log(listImages);

    var counter = 0;
    console.log(counter);


    listElements[counter].classList.add('visible');

    //visibleImg.classList.add('visible');
    //.classList.add('visible');
   // console.log(visibleImg);


    previous.addEventListener('click', function (event) {


        [...listElements].forEach(function(element){

            if (element.className === 'visible'){
                element.classList.remove('visible');
            }

        });
        counter -=1;
        console.log(counter);

        if (counter < 0) {
            counter = listElements.length-1;
        }

        listElements[counter].classList.add('visible');

    });



    next.addEventListener('click', function (event) {
       // console.log('hello');

        [...listElements].forEach(function(element){

                if (element.className === 'visible'){
                   element.classList.remove('visible');
               }

        });
        counter +=1;
        console.log(counter);

        if (counter >= listElements.length) {
            counter = 0;
        }

        listElements[counter].classList.add('visible');


    });


});
