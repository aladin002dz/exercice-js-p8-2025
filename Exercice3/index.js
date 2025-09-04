// Créez votre fonction ici

/**
 * Fonction qui calcule la moyenne d'un tableau de nombres
 * @param {Array<number>} numbers - Tableau de nombres à traiter
 * @returns {number|string} - Moyenne des nombres ou message d'erreur
 */
function calculateAverage(numbers) {
    // Vérifier si le tableau existe et n'est pas vide
    if (!numbers || numbers.length === 0) {
        return "No numbers to calculate average";
    }

    // Calculer la somme de tous les nombres avec reduce()
    // reduce() parcourt le tableau et accumule les valeurs
    const sum = numbers.reduce((acc, num) => acc + num, 0);

    // Retourner la moyenne (somme divisée par le nombre d'éléments)
    return sum / numbers.length;
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
