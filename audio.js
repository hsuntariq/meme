const container = document.querySelector(".audio--container")
const getAudio = async () => {
    const response = await fetch("https://memeapi-production.up.railway.app/audio")
    const data = await response.json()
    const allAudio = data.audio
    
    allAudio.map((item) => {
        const audioTag = document.createElement("AUDIO")
        const title = document.createElement("p")
        title.textContent = item.name
        audioTag.setAttribute("src",`${item.url}`)
        audioTag.setAttribute("controls","controls")
        container.appendChild(title)
        container.appendChild(audioTag)
    })
}
getAudio()
