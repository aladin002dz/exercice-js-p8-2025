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
                alert('Division par zéro impossible !');
                clearDisplay(); // Réinitialiser la calculatrice
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

// Gestionnaire d'événements pour les boutons d'opération
document.addEventListener('DOMContentLoaded', function () {
    // Sélectionner tous les boutons qui ont un onclick avec appendToDisplay
    const operatorButtons = document.querySelectorAll('button[onclick*="appendToDisplay"]');

    // Ajouter un gestionnaire d'événements à chaque bouton
    operatorButtons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.textContent; // Récupérer le texte du bouton

            // Si c'est un opérateur, gérer la logique de la calculatrice
            if (isOperator(value)) {
                // Premier cas : on a un nombre et on sélectionne un opérateur
                if (displayValue !== '' && firstNumber === null) {
                    firstNumber = parseFloat(displayValue); // Stocker le premier nombre
                    operator = value;                       // Stocker l'opérateur
                    waitingForSecondNumber = true;          // Attendre le deuxième nombre
                }
                // Deuxième cas : on a déjà une opération en cours
                else if (firstNumber !== null && operator !== null && !waitingForSecondNumber) {
                    calculateResult();                      // Calculer le résultat actuel
                    firstNumber = parseFloat(displayValue); // Utiliser le résultat comme premier nombre
                    operator = value;                       // Stocker le nouvel opérateur
                    waitingForSecondNumber = true;          // Attendre le deuxième nombre
                }
            }
        });
    });
});
