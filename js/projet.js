let params = new URLSearchParams(window.location.search);
let idProjet = params.get('id');


let lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
document.body.appendChild(lightbox);

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});





function afficherProjet (projet) {
    let banner_projet = document.getElementsByClassName('banner_projet');

    banner_projet[0].innerHTML = `
    <div>
        <img src="${projet.image[0]}" class="image_zoom">
    </div>

    <div class="sous-titre_projet">
        <h1>${projet.titre}</h1>
        <h2>${projet.categorie}</h2>
        <span>${projet.legende}</span>
    </div>`;
    
    let description = document.getElementsByClassName('description_projet');

    description[0].innerHTML = `
    <span>${projet.description}</span>`;
    
    let images_projets = document.getElementsByClassName('images_projets');

    for (let i = 1 ; i < projet.image.length ; i++){

        images_projets[0].innerHTML += `
        <img src="${projet.image[i]}" class="image_zoom">`;
    }

    document.querySelectorAll('.image_zoom').forEach(img => {
        img.addEventListener('click', () => {

            lightbox.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
            lightbox.style.display = 'flex';
        });
    });

    
}   



fetch('assets/data/projets.json')
  .then(res => res.json())
  .then(projets => {
    let projet = projets.find((p) => p.id == idProjet);
    if (projet) {
      afficherProjet(projet);
    } else {
      document.body.innerHTML = "<h1>Projet introuvable</h1>";
    }
  });





