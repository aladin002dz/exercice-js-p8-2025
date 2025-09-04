// Variables globales pour la calculatrice
let displayValue = '';           // Valeur actuellement affichée à l'écran
let firstNumber = null;          // Premier nombre de l'opération
let operator = null;             // Opérateur sélectionné (+, -, *, /)
let waitingForSecondNumber = false; // Indique si on attend la saisie du deuxième nombre

/**
 * Fonction pour ajouter des chiffres et opérateurs à l'affichage
 * @param {string} value - Valeur à ajouter (chiffre ou opérateur)
 */
function appendToDisplay(value) {
    // Si on attend le deuxième nombre et que ce n'est pas un opérateur
    if (waitingForSecondNumber && !isOperator(value)) {
        // Effacer l'affichage pour commencer la saisie du nouveau nombre
        displayValue = '';
        waitingForSecondNumber = false;
    }

    // Ajouter la valeur à l'affichage
    displayValue += value;
    // Mettre à jour l'écran de la calculatrice
    document.getElementById('display').value = displayValue;
}

/**
 * Fonction pour vérifier si une valeur est un opérateur mathématique
 * @param {string} value - Valeur à vérifier
 * @returns {boolean} - True si c'est un opérateur, false sinon
 */
function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
}

/**
 * Fonction pour effacer l'affichage et réinitialiser la calculatrice
 */
function clearDisplay() {
    displayValue = '';           // Effacer l'affichage
    firstNumber = null;          // Réinitialiser le premier nombre
    operator = null;             // Réinitialiser l'opérateur
    waitingForSecondNumber = false; // Réinitialiser l'état d'attente
    document.getElementById('display').value = ''; // Effacer l'écran
}

/**
 * Fonction pour calculer le résultat de l'opération en cours
 */
function calculateResult() {
    // Vérifier que tous les éléments nécessaires sont présents
    if (displayValue === '' || firstNumber === null || operator === null) {
        return; // Sortir si les données sont incomplètes
    }

    // Convertir la valeur affichée en nombre
    const secondNumber = parseFloat(displayValue);
    let result;

    // Effectuer l'opération selon l'opérateur sélectionné
    switch (operator) {
        case '+':
            result = firstNumber + secondNumber; // Addition
            break;
        case '-':
            result = firstNumber - secondNumber; // Soustraction
            break;
        case '*':
            result = firstNumber * secondNumber; // Multiplication
            break;
        case '/':
            // Vérifier la division par zéro
            if (secondNumber === 0) {
                // Afficher le message d'erreur dans le display au lieu d'un alert
                document.getElementById('display').value = 'Division by zero is not allowed';
                displayValue = 'Division by zero is not allowed';
                // Réinitialiser les variables pour la prochaine opération
                firstNumber = null;
                operator = null;
                waitingForSecondNumber = false;
                return;
            }
            result = firstNumber / secondNumber; // Division
            break;
        default:
            return; // Opérateur non reconnu
    }

    // Afficher le résultat à l'écran
    document.getElementById('display').value = result;
    displayValue = result.toString(); // Mettre à jour la valeur affichée

    // Préparer la calculatrice pour la prochaine opération
    firstNumber = result;        // Le résultat devient le premier nombre
    operator = null;             // Réinitialiser l'opérateur
    waitingForSecondNumber = false; // Plus d'attente
}

/**
 * Fonction pour gérer les clics sur les boutons
 * @param {string} value - Valeur du bouton cliqué
 */
function handleButtonClick(value) {
    if (value === 'C') {
        // Bouton Clear
        clearDisplay();
    } else if (value === '=') {
        // Bouton égal - calculer le résultat
        calculateResult();
    } else if (isOperator(value)) {
        // Bouton opérateur
        if (displayValue !== '' && firstNumber === null) {
            // Premier cas : on a un nombre et on sélectionne un opérateur
            firstNumber = parseFloat(displayValue);
            operator = value;
            waitingForSecondNumber = true;
        } else if (firstNumber !== null && operator !== null && !waitingForSecondNumber) {
            // Deuxième cas : on a déjà une opération en cours
            calculateResult();
            firstNumber = parseFloat(displayValue);
            operator = value;
            waitingForSecondNumber = true;
        }
    } else {
        // Bouton chiffre
        appendToDisplay(value);
    }
}

// Gestionnaire d'événements principal
document.addEventListener('DOMContentLoaded', function () {
    // Sélectionner tous les boutons de la calculatrice
    const buttons = document.querySelectorAll('.calculator button');

    // Ajouter un gestionnaire d'événements à chaque bouton
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.getAttribute('data-value'); // Récupérer la valeur du bouton
            handleButtonClick(value); // Traiter le clic
        });
    });
});
