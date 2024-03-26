function updateDateTime() {
    const now = new Date();
    const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

    const dayOfWeek = days[now.getDay()];
    const month = months[now.getMonth()];
    const dayOfMonth = now.getDate();
    const year = now.getFullYear();

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    const dateString = `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;
    const timeString = `${hours}:${minutes}`;

    document.getElementById('date').innerText = dateString;
    document.getElementById('heure').innerText = timeString;

}


setInterval(updateDateTime,);

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

    // Récupérer les éléments de la date 
    const dateElement = document.getElementById('date');
    const listContentElement = document.getElementById('listContent');


    // Mettre à jour le contenu de la carte avec la date et l'heure actuelles
    dateElement.innerText = currentDate.toLocaleDateString();
    listContentElement.innerText = currentDate.toLocaleDateString();
  
    


}
