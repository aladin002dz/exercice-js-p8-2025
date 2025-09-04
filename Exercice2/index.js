// Créez votre fonction ici

/**
 * Fonction calculatrice qui effectue des opérations mathématiques
 * @param {number|string} num1 - Premier nombre (peut être un nombre ou une chaîne)
 * @param {number|string} num2 - Deuxième nombre (peut être un nombre ou une chaîne)
 * @param {string} operator - Opérateur mathématique (+, -, *, /)
 * @returns {number|string} - Résultat de l'opération ou message d'erreur
 */
function calculate(num1, num2, operator) {
    // Convertir les entrées en nombres (gère les chaînes de caractères)
    const number1 = Number(num1);
    const number2 = Number(num2);

    // Vérifier que les conversions sont valides
    if (isNaN(number1) || isNaN(number2)) {
        return "Invalid numbers";
    }

    // Utiliser un switch pour gérer les différents opérateurs
    switch (operator) {
        case '+':
            return number1 + number2; // Addition
        case '-':
            return number1 - number2; // Soustraction
        case '*':
            return number1 * number2; // Multiplication
        case '/':
            // Vérifier la division par zéro
            if (number2 === 0) {
                return "Division by zero is not allowed";
            }
            return number1 / number2; // Division
        default:
            // Opérateur non reconnu
            return "Invalid operator";
    }
}

// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, '+'));   // Affiche 8
console.log(calculate(10, 4, '-'));  // Affiche 6
console.log(calculate(7, 2, '*'));   // Affiche 14
console.log(calculate(12, 3, '/'));  // Affiche 4
console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"

export default calculate
