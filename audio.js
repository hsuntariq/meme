const container = document.querySelector(".audio--container")
const getAudio = async () => {
    const response = await fetch("https://memeapi-production.up.railway.app/audio")
    const data = await response.json()
    const allAudio = data.audio
    
    allAudio.map((item) => {
        const audioTag = document.createElement("AUDIO")
        const columns = document.createElement("div")
        columns.classList.add("col-lg-4")
        columns.classList.add("border")
        columns.classList.add("p-3")
        columns.classList.add("layout")
        container.appendChild(columns)
        const title = document.createElement("p")
        title.textContent = item.name
        audioTag.setAttribute("src",`${item.url}`)
        audioTag.setAttribute("controls","controls")
        columns.appendChild(title)
        columns.appendChild(audioTag)
    })
}
getAudio()
