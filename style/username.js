document.addEventListener('DOMContentLoaded', (event) => {
    const userNameElement = document.querySelector('.user-name');
    const popup = document.getElementById('popup');
    const closePopupButton = document.getElementById('close-popup');

    userNameElement.addEventListener('click', () => {
        popup.style.display = 'flex';
    });

    closePopupButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});