// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);

//for all forms on page
// console.log(document.forms);

//for all links
// console.log(document.links);
// console.log(document.images);

//getElementById
// console.log(document.getElementById('header-title'));

// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');

// console.log(headerTitle);
// headerTitle.textContent = 'Hiyah!';

//innerText pays attention to styling
// headerTitle.innerText = 'Biyah!';

//innerHTML pays attention to HTML tags
// headerTitle.innerHTML = '<h2>Yezzir<h2/>';

//style manipulation
// header.style.borderBottom = 'solid 3px black';

//getElementsByClassName
    //getting all the list items
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hiyah 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

//this doesn't work, have to loop through it
// items.style.backgroundColor = 'yellow';
// for(var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = 'yellow';
// }

//getElementsByTagName
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hiyah 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

//querySelector
    //use it for only one item
        //can grab tags, classes, id's
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px red';

// var input = document.querySelector('input');
// input.value = 'Hiyah There!';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

//without specification, it only mmanipulates the first occurrence
// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

//with specification, now the last item becomes blue
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

//specification via nth child
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

//querySelectorAll
    //works similar to getElementByTag/ClassName
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hiyah There!';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = "purple";
//     even[i].style.backgroundColor = 'pink';
// }

//PART TWO: TRAVERSING THE DOM
// var itemList = document.querySelector('#items');
    
    //parentNode property
        // console.log(itemList.parentNode);
        // itemList.parentNode.style.backgroundColor = 'red';
        //this goes up to the #main div, another parentNode would go up to the .container div.
        // console.log(itemList.parentNode.parentNode); 
            //parentNode and parentElement are interchangeable
            // console.log(itemList.parentElement.parentElement); 

    //childNode property
        // console.log(itemList.childNodes);
        //childNode and firstChild give all the text-nodes, whitespace, a bit much

    //children property
        //cleaner, just gives the children
    // console.log(itemList.children);
    // console.log(itemList.children[1]);
    // itemList.children[1].style.backgroundColor = 'blue';

        // firstChild
            //similar to childNode, a bit much
        // console.log(itemList.firstChild);

        //firstElementChild
            //similar to children, cleaner
        // console.log(itemList.firstElementChild);
        // itemList.firstElementChild.textContent = 'Hiyah!';

        //lastElementChild
        // itemList.lastElementChild.textContent = 'Biyah!';

    //siblings
        //nextSibling is like childNode
        // console.log(itemList.nextSibling);
        
        //nextElementSibling is cleaner, like firstElementChild
        
        //previousSibling 
        // console.log(itemList.previousSibling);

        //previousElementSibling
        // console.log(itemList.previousElementSibling);
        // itemList.previousElementSibling.style.color = 'red';

// create element
    //create a div
    // var newDiv = document.createElement('div');
    //prints an empty div to console (<div></div>)
    // console.log(newDiv);
    
    //add class
    // newDiv.className = 'hello';
    // console.log(newDiv);
    //prints an empty div with a class of hello to the console (<div class="hello"></div>)

    //add id
    // newDiv.id = "hiyah";
    // console.log(newDiv);

    //add attribute
    // newDiv.setAttribute('title', 'Hiyah Div');
    // console.log(newDiv);

    //create text node
    // newDivText = document.createTextNode('Hello World');

    //add text to div
    // newDiv.appendChild(newDivText);

        //adding it to the DOM
            //this means that in the header you want the container class
        // var container = document.querySelector('header .container');
        // var h1 = document.querySelector('header h1');
        // console.log(newDiv);
            //two params, one what we are inserting(newDiv) and the other is what we are inserting before (h1)
            // container.insertBefore(newDiv, h1);
            // newDiv.style.fontSize = '30px';
            
//PART THREE: EVENTS

// var button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(event) {
    // document.getElementById('header-title').textContent = 'Changed';
    // document.querySelector('#main').style.backgroundColor = 'red';
    // console.log(event);

    //this gives you the element that was clicked
    // console.log(event.target);
    // console.log(event.target.id);
    // console.log(event.target.className);
    // console.log(event.target.classList);
    // var output = document.getElementById('output');
    // output.innerHTML = '<h3>' + event.target.id + '</h3>';
    
    //tells you the type of the event
    // console.log(event.type);

    //clientX+clientY is position from the browswer window
    // console.log(event.clientX);
    // console.log(event.clientY);

    //offsetX+offsetY is position of actual element itself
    // console.log(event.offsetX);
    // console.log(event.offsetY);

    //keytypeKey shows you which key was pressed
    // console.log(event.altKey);
    // console.log(event.shiftKey)
// }

// var button = document.getElementById('button');
// var box = document.getElementById('box');

// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);

function runEvent(event) {
    //this makes it so the submit log does not disappear from form.addEventListener
    event.preventDefault();
    console.log('EVENT TYPE: ' + event.type);
    // console.log(event.target.value);
    // document.getElementById('output').innerHTML = '<h3>' + event.target.value + '</h3>'
    // output.innerHTML = '<h3>MouseX: ' + event.offsetX + '</h3><h3>MouseY: ' + event.offsetY + '</h3>';

    // box.style.backgroundColor = "rgb(" + event.offsetX + "," + event.offsetY + ",40)";

    // document.body.style.backgroundColor = "rgb(" + event.offsetX + "," + event.offsetY + ",40)";


}

