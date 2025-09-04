// Créez votre fonction ici

/**
 * Fonction calculatrice qui effectue des opérations mathématiques
 * @param {number} num1 - Premier nombre
 * @param {number} num2 - Deuxième nombre
 * @param {string} operator - Opérateur mathématique (+, -, *, /)
 * @returns {number|string} - Résultat de l'opération ou message d'erreur
 */
function calculate(num1, num2, operator) {
    // Utiliser un switch pour gérer les différents opérateurs
    switch (operator) {
        case '+':
            return num1 + num2; // Addition
        case '-':
            return num1 - num2; // Soustraction
        case '*':
            return num1 * num2; // Multiplication
        case '/':
            // Vérifier la division par zéro
            if (num2 === 0) {
                return "Division by zero is not allowed";
            }
            return num1 / num2; // Division
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
