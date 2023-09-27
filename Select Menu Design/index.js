const selectField = document.getElementById('select-field')

const selectText = document.getElementById("select-text");
const options = document.getElementsByClassName('options')
const list = document.getElementById("list");
const arrowIcon = document.getElementById("arrow-icon");


selectField.onclick = function(){
    list.classList.toggle('hide')
    arrowIcon.classList.toggle('rotate')

}
for(option of options){
    option.onclick =function(){
        selectText.innerHTML = this.textContent
           list.classList.toggle("hide");
    }
}