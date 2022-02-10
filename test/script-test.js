const item = document.querySelectorAll('img');
const itemcount = item.length;
let count = 0;
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')

function shownextitem(){
    item[count].classList.remove('action');

    if (count<itemcount-1){
        count ++;
    }else{
        count = 0;
    }
    item[count].classList.add('action');
}

function showprevitem(){
    item[count].classList.remove('action');

    if (count>0){
        count --;
    }else{
        count = itemcount -1;
    }
    item[count].classList.add('action');
}

next.addEventListener('click',shownextitem)
prev.addEventListener('click',showprevitem)