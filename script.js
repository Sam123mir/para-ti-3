let currentPrincess = 1;
let totalPrincesses = 7;

document.getElementById('princess1').style.display = 'block';

function nextPrincess() {
    if (currentPrincess <= totalPrincesses) {
        document.getElementById('princess' + currentPrincess).style.display = 'none';
    }
    currentPrincess++;
    
    if (currentPrincess <= totalPrincesses) {
        document.getElementById('princess' + currentPrincess).style.display = 'block';
    } else {
        document.getElementById('special').style.display = 'block';
        document.querySelector('.btn').style.display = 'none';
        document.getElementById('rating').style.display = 'block';
    }
}
    function rate(stars) {
        let hearts = document.querySelectorAll('.heart');
        hearts.forEach((heart, index) => {
            heart.classList.toggle('selected', index < stars);
        });
    
        // Formato correcto para abrir Instagram Direct con mensaje
        const message = encodeURIComponent(`Califiqué con ${stars} corazones! ❤️`);
        window.open(`https://www.instagram.com/direct/inbox/?text=${message}`, '_blank');
    }
    
