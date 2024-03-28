const event = new Date(2024, 2, 28, 3,); 
const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',   
};

console.log(event.toLocaleDateString('fr-FR', options));

document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.querySelector('.button-card');
    addButton.addEventListener('click', function() {
        updateListContent();
    });
});

function updateListContent() {
    const now = new Date();
    const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };
    const formattedDate = now.toLocaleDateString('fr-FR', options);
    document.getElementById('listContent').textContent = formattedDate;
};

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('heure').textContent = h + ":" + m;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
}   
  startTime();

  let date1 = new Date();

  let dateperso = date1.toLocaleString('fr-FR',{
      day: 'numeric',
      month: 'long',
      weekday: 'long',    
    });
  
  document.getElementById('date').innerHTML = dateperso;


