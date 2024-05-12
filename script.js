function getData() {
  fetch("data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Traitez les données comme vous le souhaitez
      console.log("Données récupérées du fichier JSON :", data);
      /// ON ECRIT LE CODE ICI !
   
   
      function navthemes(){
    let themes = data.journal.themes;

    
      themes.forEach((element) => {
        let themeElement = `<li>${element.nom}</li>`;
        let navTheme = document.getElementById("navTheme");
        navTheme.insertAdjacentHTML("beforeend", themeElement);
      });


   }



      let nomJournal = data.journal.nomJournal;
      let article = data.journal.articles;
      
      function articleprince(){
       let articlePrincipal = data.journal.articlePrincipal;
  
       
      let articleprincipalElement = document.getElementById("articlePrincipal");
      let articleprincipalElementJunior = ` <H1>${articlePrincipal.titre}</H1>
 <H3>${articlePrincipal.theme} - ${articlePrincipal.date}</H3>
<p>${articlePrincipal.description}</p>
<button>lire l' article</button>`;
      articleprincipalElement.insertAdjacentHTML(
        "beforeend",
        articleprincipalElementJunior
      ); 
    }

function afficherArticle(){
      let articleContainer = document.getElementById("articleContainer");
      data.journal.articles.forEach((element) => {
        let articleElement = ` <article><h1> ${element.titre} </h1>
        <div> <article> <img src=" ${element.image} " alt="image"> </article> </div>

<h3>${element.theme} - ${element.date} </h3>
<button> lire l' article </button>
</article>`;
        articleContainer.insertAdjacentHTML("beforeend", articleElement);
      });
}

function afficherAuteurs(){

      let auteurs= document.getElementById("auteurs");
      data.journal.auteurs.forEach((element) => {
        let auteursElement = `<article>
        <img src="${element.image} " alt="avatar" />
        <h3> ${element.prenom} - ${element.typeExperience} </h3>
        <p> ${element.presentation} </p>
      </article>`
      ;

        auteurs.insertAdjacentHTML("beforeend", auteursElement);
      });
}
   function afficherThemefooter(){
      let themefooter = document.getElementById("themefooter");
data.journal.themes.forEach((element) => {
  let themefooterElement = `<div> <h3> ${element.nom} </h3>
  <p>
  ${element.description}
    
  </p>
</div>`
;
themefooter.insertAdjacentHTML("beforeend", themefooterElement);


});
}

      console.log(articleContainer);
      console.log(article);
      console.log(nomJournal);
      //console.log(themes);
      
      articleprince();
      navthemes();
      afficherArticle();
      afficherAuteurs();
      afficherThemefooter();
     
      /// FIN DU CODE
    })
    .catch((error) =>
      console.error("Erreur lors de la lecture des données :", error)
    );
}

getData();

///ON écrit les fonctions ici
