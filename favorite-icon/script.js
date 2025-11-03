const favoriteIcons = document.querySelectorAll('.favorite-icon');

favoriteIcons.forEach(icon => {
  icon.addEventListener('click', function() {
    const button = this;
    button.classList.toggle('filled');

    if (button.classList.contains('filled')) {
      button.innerHTML = '&#10084;';
    } else {
      button.innerHTML = '&#9825;';
    }
  });
});