function handleMouseEnter() {
    this.classList.add('card__hovered');
}

function handleMouseLeave() {
    this.classList.remove('card__hovered');
}

function addEventListenersToCards() {
    const cardElements = document.getElementsByClassName('card');
    
    for(let index=0; index < cardElements.length; index++) {
        const card = cardElements[index];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);