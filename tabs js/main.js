
var list = document.querySelector('.list');
var items = Array.from(list.querySelectorAll('.item'));
var descriptionList = document.querySelector('.description-list');
var descriptionItems = Array.from(descriptionList.querySelectorAll('.description-item'));

list.addEventListener('click', function(event){
    
    var button = event.target;
    var item = button.parentNode;
    var itemIndex = items.indexOf(item);
    var buttonActive = list.querySelector('.button.active');
    var descriptionButtonActive = descriptionList.querySelector('.description-item.active');

    if(item){
        buttonActive.classList.remove('active');
        button.classList.add('active');

        descriptionButtonActive.classList.remove('active');
        descriptionItems[itemIndex].classList.add('active');
    }
    
});