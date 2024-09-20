//DOM Element
 // récupération de l'élément :
 let elem = document.getElementById('elem');

 // on met son arrière-plan noir:
 elem.style.background = 'black';
 elem.style.textAlign = 'center';
 elem.style.color = 'white';
 elem.style.width = '50%';
 elem.style.height = 'auto';
 elem.style.padding = '8px';
 elem.style.marginLeft= '8px';
 elem.style.marginRight= '10px';
 

  

/*DOM Event Listener
  Sélectionner le bouton par son id */

  const button = document.getElementById('myBtn');

  // Ajouter un écouteur d'événement pour le clic
  button.addEventListener('click', function() {
      console.log('Le bouton a été cliqué!');
      alert('Le bouton a été cliqué!');
  });
  
 // DOM Document: Accéder aux éléments
 const userForm = document.getElementById('userForm');
 const output = document.getElementById('output');
 const animatedBox = document.getElementById('animatedBox');
 const animateButton = document.getElementById('animateButton');
 const changeColorButton = document.getElementById('changeColorButton');

  // Fonction qui gère la soumission du formulaire
  function handleFormSubmit(event) {

    
    // Récupérer les valeurs des champs du formulaire
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;

    // Afficher les données dans l'élément 'output'
    const output = document.getElementById('output');
    output.innerHTML = `
        <p>Nom complet: ${fullName}</p>
        <p>Email: ${email}</p>
        <p>Âge: ${age}</p>
        <p>Genre: ${gender}</p>
    `;
}

// Ajouter un écouteur d'événement pour la soumission du formulaire
const form = document.getElementById('registrationForm');
form.addEventListener('submit', handleFormSubmit);


 // DOM Animations: Animer un élément
 animateButton.addEventListener('click', function() {
    animatedBox.style.transform = 'translateX(150px)';
});

// DOM CSS: Modifier les styles avec JavaScript
changeColorButton.addEventListener('click', function() {
    animatedBox.style.backgroundColor = animatedBox.style.backgroundColor === 'blue' ? 'green' : 'blue';
});








   