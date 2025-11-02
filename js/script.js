

function affiche_projets(projets, nbr) {
    let liste_projets = document.getElementById('liste_projets');

    if(nbr > 0){
        for(let p = 0 ; p < nbr ; p++) {
            let div = document.createElement('div');
            div.classList.add('projet');
            div.innerHTML = `
            <a href="projet.html?id=${projets[p].id}">
            <img src="${projets[p].image[0]}" alt="${projets[p].description}">
            <div class="hover"><h2>${projets[p].titre}</h2>${projets[p].legende}</div>
            </a>`;
            
            liste_projets.appendChild(div);
        }

    }else {

        for (let p of projets) {
            let div = document.createElement('div');
            div.classList.add('projet');
            div.innerHTML = `
            <a href="projet.html?id=${p.id}">
            <img src="${p.image[0]}" alt="${p.description}">
            <div class="hover"><h2>${p.titre}</h2>${p.legende}</div>
            </a>`;
            
            liste_projets.appendChild(div);
        }
    }
}

// fetch('assets/data/projets.json')
//     .then(res => res.json())
//     .then(projets => {
//         console.log(projets);
//         affiche_projets(projets, 0);
//     });

