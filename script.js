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

      let nomJournal = data.journal.nomJournal;
      let article = data.journal.articles;
      let themes = data.journal.themes;

      let navTheme = document.getElementById("navTheme");
      themes.forEach((element) => {
        let themeElement = `<li>${element.nom}</li>`;
        navTheme.insertAdjacentHTML("beforeend", themeElement);
      });

      let articlePrincipal = data.journal.articlePrincipal;
      console.log(articlePrincipal);

      let articleprincipalElement = document.getElementById("articlePrincipal");
      let articleprincipalElementJunior = ` <H1>${articlePrincipal.titre}</H1>
 <H3>${articlePrincipal.theme} - ${articlePrincipal.date}</H3>
<p>${articlePrincipal.description}</p>
<button>uss</button>`;
      articleprincipalElement.insertAdjacentHTML(
        "beforeend",
        articleprincipalElementJunior
      );

      let articleContainer = document.getElementById("articleContainer");
      data.journal.articles.forEach((element) => {
        let articleElement = ` <article><h1> ${element.titre} </h1>
<img src=" " alt="">
<h3>${element.theme} - ${element.date} </h3>
<button> lire l' article </button>
</article>`;
        articleContainer.insertAdjacentHTML("beforeend", articleElement);
      });

      let auteurs= document.getElementById("auteurs");
      data.journal.auteurs.forEach((element) => {
        let auteursElement = `<article>
        <img src="" alt="" />
        <h3> ${element.prenom} - ${element.typeExperience} </h3>
        <p> ${element.presentation} </p>
      </article>`
      ;

        auteurs.insertAdjacentHTML("beforeend", auteursElement);
      });


      console.log(articleContainer);
      console.log(article);
      console.log(nomJournal);
      console.log(themes);

      /// FIN DU CODE
    })
    .catch((error) =>
      console.error("Erreur lors de la lecture des données :", error)
    );
}

getData();

///ON écrit les fonctions ici
