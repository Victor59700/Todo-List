// Définir les données à sauvegarder
const data = {
   key:id='date',
   
};

// Convertir les données en chaîne JSON
const jsonData = JSON.stringify(data);

// Enregistrer les données dans le localStorage avec une clé spécifique
localStorage.setItem('maCle', jsonData);

// Récupérer les données à partir du localStorage avec la clé spécifique
const savedData = localStorage.getItem('maCle');

// Vérifier si des données ont été trouvées
if (savedData) {
    // Convertir la chaîne JSON en objet JavaScript
    const parsedData = JSON.parse(savedData);
    console.log(parsedData); // Afficher les données récupérées
} else {
    console.log('Aucune donnée trouvée dans le localStorage pour cette clé.');
}

// Supprimer les données du localStorage avec la clé spécifique
localStorage.removeItem('maCle');
