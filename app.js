let dropdown1 = document.getElementById('dropdown1')
function opendrop(){
    if(dropdown1.style.display == 'none'){
        dropdown1.style.display = 'block'
    }
    else(dropdown1.style.display = 'none')
}

let menubar = document.getElementById('menubar')
function openmenu(){
   menubar.style.left = '0'
}
function closemenu(){
    menubar.style.left = '-100%'
}