const jokeEl = document.getElementById('joke')  //Getting 2 ID's out of the HTML file 
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener("click", generateJoke) //when "get another joke" is clicked an event will trigger that
                                                //will trigger the generateJoke function

generateJoke()

async function generateJoke() {   //sync option
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    
    const res = await fetch('https://icanhazdadjoke.com/', config)
    
    const data = await res.json()
    
    jokeEl.innerHTML = data.joke
}

// function generateJoke() {   //a-sync option
//     const config = {
//         headers: {
//             Accept: 'application/json'
//         }
//     }
    
//     fetch('https://icanhazdadjoke.com/', config)
//         .then((res) => res.json())
//         .then((data) => {
//          jokeEl.innerHTML = data.joke
//     })
// }