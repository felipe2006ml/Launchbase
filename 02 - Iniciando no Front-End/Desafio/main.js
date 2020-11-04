const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const cards = document.querySelectorAll('.card');
const values = modal.classList;

for(let card of cards) {
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modal.classList.remove('active')
        modalOverlay.querySelector('iframe').src = `https://blog.rocketseat.com.br/${videoId}`
    })
}

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active')
})

document.querySelector('.maximize-modal').addEventListener("click", function() {
    if(values.length == 2) {
        modal.classList.remove('active')
    }
    else {
        modal.classList.add('active')
    }
})

