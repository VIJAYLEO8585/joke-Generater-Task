const jokeBtn = document.getElementById("joke-btn")
const jokeText = document.getElementById("joke")
jokeBtn.addEventListener("click",fetchJoke)
async function fetchJoke(){
    try{
        const response = await fetch("https://v2.jokeapi.dev/joke/Any")
        if(!response.ok){
            throw new Error ("Failed to fetch a joke")
        }
        const jokeData =await response.json()
        console.log(jokeData)
        if(jokeData.type === "single"){
            jokeBtn.Textcontent = jokeData.joke
        }
        else{
            jokeText.textContent = jokeData.setup+" "+jokeData.delivery
        }
    }catch(error){
        console.log(error)
    }
}