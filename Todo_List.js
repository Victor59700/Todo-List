// Fonction pour mettre à jour la date et l'heure actuelles
function updateDateTime() {
    const today = new Date();
    const daysOfWeek = [
       'Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 
    ];
    const months = [
        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août',
        'Septembre', 'Octobre', 'Novembre', 'Décembre',
    ];

    const dayOfWeek = daysOfWeek[today.getDay()];
    const dayOfMonth = today.getDate();
    const month = months[today.getMonth()];
    const year = today.getFullYear();

    const formattedDate = `${dayOfWeek} ${dayOfMonth} ${month} ${year}`;
    document.getElementById('date').innerText = formattedDate;

    const hours = today.getHours().toString().padStart(2, '0');
    const minutes = today.getMinutes().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}`;

    document.getElementById('heure').innerText = timeString;
}

// Appeler la fonction une fois au chargement de la page pour afficher l'heure actuelle
updateDateTime();

document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner le bouton "Ajouter une liste"
    const addButton = document.querySelector('.button-card');

    // Ajouter un écouteur d'événements au clic sur le bouton
    addButton.addEventListener('click', function() {
        // Appeler la fonction pour mettre à jour la date et l'heure dans la carte
        updateListContent();
    });
});

// Fonction pour mettre à jour le contenu de la liste avec la date et l'heure
function updateListContent() {
    // Récupérer la date actuelle
    const currentDate = new Date();
    
    // Créer un tableau pour les jours de la semaine en français
    const daysOfWeekFrench = [
      'Dimanche',  'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 
    ];

    // Créer un tableau pour les mois en français
    const monthsFrench = [
        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];

    // Récupérer le jour de la semaine, le jour du mois, le mois et l'année
    const dayOfWeek = daysOfWeekFrench[currentDate.getDay()];
    const dayOfMonth = currentDate.getDate();
    const month = monthsFrench[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    // Formater la date
    const formattedDate = `${dayOfWeek} ${dayOfMonth} ${month} ${year}`;

    // Récupérer l'élément de la liste
    const listContentElement = document.getElementById('listContent');

    // Mettre à jour le contenu de la liste avec la date formatée
    listContentElement.innerText = formattedDate;
}
