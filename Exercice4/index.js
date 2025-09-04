// Gestionnaire d'événement pour le clic sur le bouton
document.getElementById('myButton').addEventListener('click', function () {
    // Créer un nouvel élément paragraphe pour afficher le message
    const message = document.createElement('p');

    // Définir le contenu textuel du paragraphe
    message.textContent = 'Bonjour, vous avez cliqué sur le bouton !';

    // Insérer le message après le bouton dans le DOM
    // after() place l'élément immédiatement après l'élément cible
    document.getElementById('myButton').after(message);
});
