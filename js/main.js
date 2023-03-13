function getCharacters(done) {
  const results = fetch("https://rickandmortyapi.com/api/character");

  results
    .then((response) => response.json())
    .then((data) => {
      done(data);
    });
}

getCharacters((data) => {
  data.results.forEach((character) => {
    const card = document.createRange().createContextualFragment(`
        <div class="card">
            <img
                src="${character.image}"
                alt="Personaje"
                class="card__img"
            />
            <div class="description">
            <h2 class="card__h2">${character.name}</h2>
            <p class="card__p">${character.status}</p>
            </div>
        </div>
        `);

        const main = document.querySelector(".main")

        main.append(card)
  });
});
