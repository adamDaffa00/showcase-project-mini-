
/**
// dengam jQuery
$(".search-button").on("click", function (){
  
$.ajax({
  url: 'http://www.omdbapi.com/?apikey=a8dfe2e0&s=' + $(".input-keywords").val(),
  success: result => {
    console.log(result)
    const movies = result.Search;
    let cards = "";
    
    movies.forEach(film => {

     cards += showCards(film);
    
    });
    $(".parent").html(cards);
    
    
    // ketika tombol di klik, request ajax lagi
     
    $('.modal-detail-button').on('click', function(){
      $.ajax({
        url: 'http://www.omdbapi.com/?apikey=a8dfe2e0&i=' + $(this).data("idfilm"),
      
        success: id => {
          
        const movieDetail = modalDetails(id);
        
         $(".modal-body").html(movieDetail);
        
        },
        error: er => {
          console.log(er.responseText);
        }
      });
    });


  
    
 },
 error: er => {
   console.log(er.responseText);
 }

  });
});
**/


// dengan fetch
/**
 const searchBtn = document.querySelector(".search-button");
 
 searchBtn.addEventListener("click", function (){
   const searchValue = document.querySelector(".input-keywords").value;
   fetch('http://www.omdbapi.com/?apikey=a8dfe2e0&s=' + searchValue)
   .then(response => response.json())
   .then(response => {
    
     let movies = response.Search;
     let cards = "";
     movies.forEach(film => cards += showCards(film)
     );
     
     const cardBody = document.querySelector(".parent");
     cardBody.innerHTML = cards;
     
     
     
     // modal box
     
     const modalBtn = document.querySelectorAll(".modal-detail-button");
     modalBtn.forEach(btn => {
       btn.addEventListener("click", function (){
       let idFilm = this.dataset.idfilm;
       fetch('http://www.omdbapi.com/?apikey=a8dfe2e0&i=' + idFilm).then(response => response.json()
       .then(id => {
          const movieDetail = modalDetails(id);
          const modalBody = document.querySelector(".modal-body");
          modalBody.innerHTML = movieDetail;

       }));
     });

     });
   });
 });

**/






// refactoring 
// search button

const search = document.querySelector('input[type="text"]');

 search.addEventListener('input', async function (e){
   try {
       const value = e.data.toLowerCase()
       const displayMovies = await inputMovies(value);
       console.log(value)
       //displayUI(displayMovies)
    } catch (e) {
       alert(e)
    }
});
 
 // error yang di tangkap oleh fetch adalah error yabg terjadi pada network nya atau url nya, jika error saat user meisikan film yang tidak ada atau user tidak memasukan input maka itu error dari browser
function inputMovies(input){
  return fetch('http://www.omdbapi.com/?apikey=a8dfe2e0&s=' + input).then(response => {
   if (!response.ok) {
    throw new Error(response.statusText)
    //console.log(response)
    }
   return response.json()
  })
  .then(response => {
   if (response.Response === "False") {
     // console.log(response)
      throw new Error(response.Error)
     }
     
   return response.Search
    });
}

function displayUI(movies){
    let cards = '';
    movies.forEach(movies => cards += showCards(movies));
    const cardBody = document.querySelector(".parent");
    cardBody.innerHTML = cards;
    return cards;
}

// Modal button
document.addEventListener("click", async function (e){
  try {
    if (e.target.classList.contains("modal-detail-button")) {
      const imdbid = e.target.dataset.idfilm;
      const dataId = await getMoviesId(imdbid);
      displayUIDetails(dataId);
    }
  } catch (e) {
    alert(e)
  }
  })

function getMoviesId(id){
  return fetch('http://www.omdbapi.com/?apikey=a8dfe2e0&i=' + id)
  .then(response => {
    if (!response.ok) {
     throw new Error(response.statusText)
    }
    return response.json()
  })
  .then(m => {
    if (m.Response == 'Error') {
      throw new Error(m.Error)
    }
    return m
   });
}

function displayUIDetails(m){
  const movieDetail = modalDetails(m);
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = movieDetail;
}

function showCards(film){
   let appenDiv = `
        <div class="col-md-4 my-5">
          <div class="card">
            
            <img src="${film.Poster}" class="card-img-top" alt="">
            
            <div class="card-body">
              <h5 class="card-title"> ${film.Title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${film.Year}</h6>
              
              <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#showDetail" data-idfilm="${film.imdbID}"> view details  </a>
              
            </div>
            
          </div>
          
        </div>
        
      </div>`;
      return appenDiv;
 }
 
function modalDetails(id){
   
     let modalDetail = `
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <img src="${id.Poster}" alt="" class="img-fluid">
            </div>
            
            <ul class="list-group">
              <li class="list-group-item"><h4> ${id.Title}</h4></li>
              <li class="list-group-item"><strong> director: </strong> ${id.Director}</li>
              <li class="list-group-item"><strong> actor :</strong> ${id.Actors} </li>
              <li class="list-group-item"><strong> writer :</strong> ${id.Writer}</li>
              <li class="list-group-item"><strong> plow: </strong> <br> ${id.Plot}</li>
            </ul>
          </div>
        </div>`;

          
return modalDetail;
 }
 
 