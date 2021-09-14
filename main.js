var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('Submit', addItem);

// DELETE event
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);


// ADD ITEM
function addItem(e) {
    e.preventdefault();

var newItem = document.getElementById('item');

var li = document.createElement('li');

li.className = 'list-group-item';

li.appendChild(document.createTextNode(newItem));

var deleteBtn = document.createElement('button');
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
deleteBtn.appendChild(document.createTextNode('X'));
li.appendChild(deleteBtn);




itemList.appendChild(li);   
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


function filterItems(e){
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName('li');
 
 Array.from(items).forEach(function(item){
     var itemName = item.firstChild.textContent;
     if(itemName.toLocaleLowerCase().indexOf(text)!= -1){
         item.style.display = 'block';
     } else{
         item.style.display = 'none';
     }
     
 });


}





