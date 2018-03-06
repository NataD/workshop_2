/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener('DOMContentLoaded', function () {

   // var navigationDiv = document.querySelector('.nav');
    var list = document.querySelector('.nav ul');
    console.log(list);
    var listEl = list.children;
    console.log(listEl);


    [...listEl].forEach(function(element){
    element.addEventListener('mouseover', function (event) {
        //console.log('Hello');
        var innerUl = element.querySelector('ul');
        if (innerUl !== null){
            //console.log(innerUl);
            innerUl.style.display = 'inline-block';
        }

    });

        element.addEventListener('mouseout', function (event) {
            console.log('Bye');

            var innerUl = element.querySelector('ul');
            if (innerUl !== null){
                //console.log(innerUl);
                innerUl.style.display = 'none';
            }

        });

    });

});