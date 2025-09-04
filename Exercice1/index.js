//votre code ici

/**
 * Fonction qui retourne tous les nombres pairs entre min et max
 * @param {number} min - Le nombre minimum de la plage
 * @param {number} max - Le nombre maximum de la plage
 * @returns {string} - Chaîne de caractères avec les nombres pairs séparés par des virgules
 */
function pairNumbers(min, max) {
    let result = ''; // Variable pour stocker le résultat final

    // Parcourir tous les nombres de min à max inclus
    for (let i = min; i <= max; i++) {
        // Vérifier si le nombre est pair (divisible par 2)
        if (i % 2 === 0) {
            // Ajouter une virgule si ce n'est pas le premier nombre
            if (result !== '') {
                result += ',';
            }
            // Ajouter le nombre pair au résultat
            result += i;
        }
    }

    return result; // Retourner la chaîne finale
}

export default pairNumbers
