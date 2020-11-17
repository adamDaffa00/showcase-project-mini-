const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    processInput(e)
 });

const loadCharacters = async () => {
    try {
        const res = await fetch('https://hp-api.herokuapp.com/api/characters');
        hpCharacters = await res.json();
        // menampilkan data pada saat halaman diload
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2>${character.name}</h2>
                <p>House: ${character.house}</p>
                <img src="${character.image}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

function processInput(e){
  // ambil inputan dari user 
  const searchString = e.target.value
  // filter hasil inputan dan kembalika data yang sesuai dengan inputan user
  const filteredCharacters = hpCharacters.filter((character) => {
    let regex = RegExp(`${searchString}`,'gi')
       
    return  character.name.match(regex) || character.house.match(regex)
  });
  // tampilkan semua data
    displayCharacters(filteredCharacters);
}
// panggil fungsi load karakter untuk merender data
loadCharacters();