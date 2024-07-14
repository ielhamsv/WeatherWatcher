class Background{
    constructor(query="Tehran") {
        this.query=query
        this.accesskey="44931680-f7ab99a209da4eaa947f097c0"
    }

    async GetBg(){
        const response = await fetch(`https://pixabay.com/api/?key=${this.accesskey}&q=${this.query}`)
        if(response.ok){
            const data = await response.json()
            return data
        } else {
            throw Error(response.status)
        }
    }

    SetPhoto(bg){
        this.query= bg
    }
}