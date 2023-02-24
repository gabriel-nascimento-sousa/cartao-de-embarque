const card = document.getElementById('ticket');

card.addEventListener("mousemove",cardEfect);

function cardEfect(event){
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;

    console.log(cardWidth);
    const centerX = card.offsetLeft + (cardWidth/2);
    const centerY = card.offsetTop + (cardHeight/2);
    const positioX = event.clientX - centerX;
    const positioY = event.clientY - centerY;

    const rotateX = (+1)*25*positioY/(cardHeight/2);
    const rotateY = (-1)*25*positioX/(cardWidth/2);

    card.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

