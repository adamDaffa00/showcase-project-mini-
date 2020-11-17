const listItemElement = document.querySelector("list-item")
const nomorsurat = document.querySelector("surah-item")

console.log(nomorsurat.dataNomor)


fetch('https://al-quran-8d642.firebaseio.com/data.json?print=pretty')
.then(res => res.json())
.then(data => {
  data.forEach(surah => {
    listItemElement.data = surah
  })
})
.catch(err => console.log(err))
