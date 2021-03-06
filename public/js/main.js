const searchInput = document.querySelector('.input-search-bar');
const searchContainer = document.querySelector('.search-bar-container');

const favIcon = document.querySelectorAll('.fav-icon');

//scroll reveal library
ScrollReveal().reveal('.post-content-container', {
    delay: 200,
    origin: 'right',
    reset: false,
    distance: '50px',
    duration: 1500,
});

//todo: maybe this is not the perfect solution.
document.addEventListener('click', () => {
    if (searchInput === document.activeElement) {
        searchContainer.style.boxShadow = '0px 0px 15px rgb(0, 0, 0, 0.2)';
    } else {
        searchContainer.style.boxShadow = 'none';
    }
});

//adds eventListeners to all favIcons
favIcon.forEach((element, index) => {
    favIcon[index].addEventListener('mouseover', (element) => {
        if (favIcon[index].classList.contains('favorite')) return;
        favIcon[index].src = './public/images/fav-icon-filled.png';
        favIcon[index].style.transform = 'scale(1.2)';
    });

    favIcon[index].addEventListener('mouseleave', () => {
        if (favIcon[index].classList.contains('favorite')) return;
        favIcon[index].src = './public/images/fav-icon.png';
        favIcon[index].style.transform = 'scale(1)';
    });

    favIcon[index].addEventListener('click', () => {
        favIcon[index].classList.contains('favorite')
            ? favIcon[index].classList.remove('favorite')
            : favIcon[index].classList.add('favorite');
    });
});
