window.addEventListener('keypress', rain)

function rain(){
    let amount = 50;
    let body = document.querySelector('body');
    let i = 0;
    while(i < amount){
        let drop = document.createElement('i');

        let size = Math.random() * 8;
        let posX = Math.floor(Math.random()* window.innerWidth);
        let delay = Math.random() * -20;
        let duration = Math.random() * 5;

        drop.style.width = 1 + size + 'px';
        drop.style.left = posX + 'px';
        drop.style.animationDuration = 1 + duration +'s'
        drop.style.animationDelay = delay+'s'

        body.appendChild(drop);
        i++
    }
}