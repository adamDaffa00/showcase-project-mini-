const search = document.querySelector("#search");
const matchList = document.querySelector(".match-list")

// cari state.json dan memfilternya
let searchState = async (searchText) =>  {
  const res = await fetch('../data/states.json')
  const states = await res.json()
  
  // dapatkan mathces sesuai dengan inout text yany dimasukan
  let matches = states.filter((state) => {
    // cari karakter yang awalnya berupa kata berdasarkan searchText
    const regex = new RegExp(`^${searchText}`,'gi')
   
    return state.name.match(regex) || state.abbr.match(regex)
  })
  if (searchState.length == 0) {
    matches = []
  }
  render(matches)
}

let render = matches => {
  if(matches.length > 0){
    const html = matches.map(match => 
       `<div class="card card-body mb-1>
          <h4> ${match.name} (${match.abbr}) <span class="text-primary"> ${match.capital} </span>
          <small> Lat: ${match.lat} / ${match.long} </small>
        </div>`
            
    ).join('')
    
    matchList.innerHTML = html;
  }
    
}

search.addEventListener("input",() => searchState(search.value));
