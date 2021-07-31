// async function getdadjoke() {
//     try {
//         const config = { headers: { Accept: 'application/json' } }
//         const res = await axios.get("https://icanhazdadjoke.com/", config)
//         return res.data.joke
//     }
//     catch (e) {
//         console.log("ERROR!!!", e)
//     }

// }

//nextjokebtn
const next = document.getElementById("nextjokebtn");
next.addEventListener("click", getjoke);
const Joke = document.getElementById("Text")
function getjoke() {
    async function getdadjoke() {
        try {
            const config = { headers: { Accept: 'application/json' } }
            const res = await axios.get("https://icanhazdadjoke.com/", config)
            let html = `<textarea class="form-control" id="exampleFormControlTextarea1" rows="3">${res.data.joke}</textarea>`
            Joke.value = res.data.joke
        }
        catch (e) {
            console.log("ERROR!!!", e)
        }

    }

    getdadjoke()

}
