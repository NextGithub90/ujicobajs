const inputButton = document.querySelector(".button");
inputButton.addEventListener("click", function () {
  const searchButton = document.querySelector(".search-button");
  fetch("http://www.omdbapi.com/?apikey=18d0aa6e&s=" + searchButton.value)
    .then((response) => response.json())
    .then((response) => {
      let movies = response.Search;
      let cards = "";
      movies.forEach((m) => (cards += showCards(m)));
      let movieContainer = document.querySelector(".isi-card");
      movieContainer.innerHTML = cards;
    });
  const buttonDetail = document.querySelectorAll(".button-detail");
  buttonDetail.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      console.log(this);
      console.log(e);
      console.log(btn);
    });
  });
});
function showCards(m) {
  return `<div class="col-4 mt-3">
  <div class="card">
      <img src="${m.Poster}" class="card-img-top" alt="...">
      <div class="card-body">
          <h5 class="card-title">${m.Title}<h5>
          <p class="card-text text-muted">${m.Year}</p>
             <a href="#" class="btn btn-primary button-detail"data-bs-toggle="modal" data-bs-target="#details">detail</a> 

          </div>
          </div>
          </div>`;
}

function showbtnDetails(m) {
  return `<div class="row">
  <div class="col-6">
      <img src="" class="img-fluid" alt="">
  </div>
  <div class="col">
      <ul class="list-group">
          <li class="list-group-item">
              <h4>Judul : </h4>
          </li>
          <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
          <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
          <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
          <li class="list-group-item"><strong>Plot : </strong><br>${m.Plot}</li>
          <h4></h4>
      </ul>
  </div>
</div>`;
}
