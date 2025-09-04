/**
 * Fonction pour convertir un nombre décimal en représentation binaire
 * Cette fonction implémente l'algorithme de division par 2 répétée
 */
function convertToBinary() {
    // Récupérer la valeur saisie par l'utilisateur dans le champ de saisie
    const decimalInput = document.getElementById('decimalInput').value;

    // Récupérer l'élément HTML où afficher le résultat
    const resultElement = document.getElementById('binaryResult');

    // Validation de l'entrée : vérifier si le champ n'est pas vide et si c'est un nombre valide
    if (decimalInput === '' || isNaN(decimalInput)) {
        resultElement.textContent = 'Veuillez entrer un nombre valide';
        return; // Sortir de la fonction si l'entrée n'est pas valide
    }

    // Convertir la chaîne de caractères en nombre entier
    const decimalNumber = parseInt(decimalInput);

    // Gérer le cas spécial du nombre 0 (sa représentation binaire est simplement 0)
    if (decimalNumber === 0) {
        resultElement.textContent = 'Résultat binaire : 0';
        return;
    }

    // ALGORITHME DE CONVERSION DÉCIMAL VERS BINAIRE
    // Principe : diviser le nombre par 2 et noter les restes à chaque étape
    let binary = '';        // Chaîne qui contiendra le résultat binaire
    let number = decimalNumber; // Copie du nombre à convertir

    // Boucle de conversion : continuer tant que le nombre est supérieur à 0
    while (number > 0) {
        // Ajouter le reste de la division par 2 au début de la chaîne binaire
        // Le reste sera soit 0 soit 1
        binary = (number % 2) + binary;

        // Diviser le nombre par 2 (division entière) pour l'étape suivante
        number = Math.floor(number / 2);
    }

    // Afficher le résultat final dans l'élément HTML
    resultElement.textContent = `Résultat binaire : ${binary}`;
}
