
document.addEventListener("DOMContentLoaded", async () => {
  try{
  const getAyatList = await getSurah()
  displayUIsurat(getAyatList)
  document.querySelectorAll(".surah").forEach(link => {
     link.addEventListener("click",() => {
      // code
      const dataNomor = link.dataset.nomor
      sessionStorage.setItem('nomor',dataNomor)
      window.location = "../../../Surah.html"
    })
  })
  }
  catch (e) {
    // console.log(e)
  }
})

function getSurah(){
 return fetch('https://al-quran-8d642.firebaseio.com/data.json?print=pretty')
  .then(res => res.json())
  .then(data => data)
   
}

function displayUIsurat(data){
  const ul = document.querySelector(".alquran-wrap ul")
  let s = ""
  data.forEach(surah => {
    s += List(surah)
  })
  ul.innerHTML = s
  return s
}

 async function req(){
    try {
      const nomor = sessionStorage.getItem('nomor')
      const dataAyat = await getAyat(nomor)
      displayUIayat(dataAyat)
    } catch (e) {
      console.log(e)
    }
  }
  
function getAyat(nomor) {
    return fetch(`https://al-quran-8d642.firebaseio.com/surat/${nomor}.json?print=pretty`)
    .then(res => res.json())
    .then(data => data)
  }   

function displayUIayat(data){
    let a = ''
    data.forEach(ayat => {
      a += displayAyat(ayat);
    });
    const contentQuran = document.querySelector(".content-quran ul");
        
    contentQuran.innerHTML = a;
  }

function displayAyat(ayat){
     
     let output = `
        <li class="ayat">
          <div class="content-quran-wrap" onclick="showSetting(${ayat.nomor - 1})">
            <p class="nomor">${ayat.nomor}</p>
            <div>
             <ul class="settings">
               <li>
                  <button type="submit" class="fas fa-play play-btn">
               </li>
               <li>
                  <button type="submit" class="fas fa-copy copy-btn">
               </li>
               <li>
                 <button type="submit" class="fas fa-bookmark bookmarks-btn">
                 </button> 
               </li>
             </ul>
             <h3 class="arab"> ${ayat.ar} </h3>
             <p class="terjemahan text-bars"> ${ayat.tr}</p>
             <p class="arti text-bars"> ${ayat.id} </p>
            </div>
          </div> 
        </li>
        `
       return output
   }

function List(surah){
   const li = `
   <li class="surah" data-nomor="${surah.nomor}">
    <div class="wrapping">
     <h5> ${surah.nomor} </h5>
      <div>
        <a href="#" class="link-surah">
        <p> ${surah.nama} : ${surah.ayat} </p>
        <p class="nama-surah"> ${surah.arti} </p>
        </a>
        <p class="asma"> ${surah.asma} </p>
      </div>
     </div>
   </li> `
   return li
 }