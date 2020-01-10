console.log('Hiyah There!');

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addItem);

//Delete Event
itemList.addEventListener('click', removeItem);

//Filter Event
filter.addEventListener('keyup', filterItems);

//Add item
function addItem(event) {
    event.preventDefault();
    
    //get input value
    var newItem = document.getElementById('item').value;

    //create new li element
    var li = document.createElement('li');

    //add class name to newly created element
    li.className = 'list-group-item';
    
    //add textNode with input value
    li.appendChild(document.createTextNode(newItem));

    //create delete butto element
    var delButton = document.createElement('button');

    //add classes to delButton
    delButton.className = 'btn btn-danger btn-sm float-right delete';

    //append textNode
    delButton.appendChild(document.createTextNode('X'));

    //append button to li
    li.appendChild(delButton);

    //append li to list
    itemList.appendChild(li);

};

 //remove item function
 function removeItem(event) {
    if(event.target.classList.contains('delete')) {
        if(confirm('Are You Sure?')) {
            var li = event.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//filter items function
function filterItems(event) {
    //convert input to lowercase
    var text = event.target.value.toLowerCase();
    
    //get li's
    var items = itemList.getElementsByTagName('li');

    //convert to an array
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}