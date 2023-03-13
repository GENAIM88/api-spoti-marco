const contenido = document.querySelector('#contenido')
const cardTop = document.querySelector('#cardTop').content
const fragment = document.createDocumentFragment()
const btnBuscar = document.getElementById('buscador')
let topTwoHundred = []

document.addEventListener('DOMContentLoaded', () => {
    loadMusicData()
})

const loadMusicData= () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '36950d1598msh1a34c6164f89c00p1bfca1jsn2b454127c9b2',
		    'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks', options)
        .then(response => response.json())
        .then(response => {
            topTwoHundred = response
            creaCards()
            console.log('canciones', topTwoHundred)
        })
        .catch(err => console.error(err));
}

const creaCards = () => {
    topTwoHundred.forEach( (song) => {
        cardTop.querySelector('img').setAttribute("src", song.trackMetadata.displayImageUri)
        cardTop.querySelector('.songname').textContent = song.trackMetadata.trackName
        let artists = ''
        let size = song.trackMetadata.artists.length
        song.trackMetadata.artists.forEach((item, index) => {
            if (index === size - 1){
                artists += item.name
            } else {
                artists += item.name + ' / '
            }
        })
        cardTop.querySelector('.artistname').textContent = artists
        const clone = cardTop.cloneNode(true)
        fragment.appendChild(clone)
    })
    contenido.appendChild(fragment)
}

btnBuscar.addEventListener('keypress', () => {
    console.log('tecla', btnBuscar.value)
    
})