import { fetchCatByBreed } from "./cats-api";

function fetchBreeds(elementHTML, ids){
    fetch('https://api.thecatapi.com/v1/breeds')
        .then(result=> result.json())
        .then(data=> {
            let catsList = data.map((cat)=> {
                ids[cat.name] = cat.id
                return `<option>${cat.name}</option>`
            });
            catsList = ['<option disabled selected>Seleccione una raza</option>', '<option>---- Activar Error ----</option>'] + catsList
            elementHTML.innerHTML = catsList 
        })
        .catch((err)=> console.log('ERROR', err))
}


const selectInput = document.querySelector('.breed-select')
const container = document.querySelector('.cat-info')
const errorMsg = document.querySelector('.error')
const loadingMsg = document.querySelector('.loader')
const catsIds = {}

fetchBreeds(selectInput, catsIds)

selectInput.addEventListener('change', (e)=>{
    if(!errorMsg.classList.contains('hidden')){
        errorMsg.classList.add('hidden')
    }
    loadingMsg.classList.remove('hidden')

    fetchCatByBreed(catsIds[selectInput.value], container, errorMsg, loadingMsg)
})