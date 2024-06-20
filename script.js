const box = document.querySelector(".container");
const imagens = document.querySelectorAll(".container img");

let contador = 0;


var button = document.getElementById('ler');



function slider() {
    contador++;
    
    if ( contador > imagens.length -1) {
        contador = 0;
    }

box.style.transform = `translateX(${-contador * 1600}px)`
}

setInterval(slider , 2000);







function openNav(){
    document.getElementById("mynav").style.width = '50%';
}

function closeNav(){
    document.getElementById("mynav").style.width = '0%';
}


function openOpc(){
    document.getElementById("opc").style.height = '100%';
}


function closeOpc(){
    document.getElementById("opc").style.height = '0%';
}






function um(){
    window.location.href = "index.html"
}

function dois(){
    window.location.href = "dois.html"
}

function tres(){
    window.location.href = "tres.html"
}


button.addEventListener('click', function(){
    var container = document.querySelector('.containerinfo');
    container.classList.toggle('active');

    if( container.classList.contains('active')) {
        return button.textContent = 'LER MENUS';
    }

    return button.textContent = 'LER MAIS';
});



