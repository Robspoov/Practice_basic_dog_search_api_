
/*
const btn = document.querySelector('button');

 

btn.onclick = function () {
    alert('hello work')
}

const fetchDogPics = async () => {
    try{
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();
    } catch(e) {
        console.log("error no good", e);
    }

}
*/
// axios.get('https://dog.ceo/api/breeds/image/random')
/*
const getDog = async () => {
    const res = await axios.get('https://api.thedogapi.com/v1/images/search?q=')
}

const jokes = document.querySelector('#jokes');

const getDadJoke = async () => {
    const config = {  headers: { Accept: 'applicationn/json'}}
    const res = await axios.get('https://icanhazdadjoke.com/')
    console.log(res.data.joke);
    const newLI = document.createElement('LI');
    newLI.append(res.data.joke);
    jokes.append(newLI)
}
*/

const form = document.querySelector('#searchForm')
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`https://api.thedogapi.com/v1/images/search?q=${searchTerm}`)
   
    const img = document.createElement('IMG');
    img.src = res.data[0].url;
    document.body.append(img);
})