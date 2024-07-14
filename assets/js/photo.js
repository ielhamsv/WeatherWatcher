class Photo{
    constructor(query="Tehran") {
        this.query=query
        this.accesskey="R7BFbzP8JM3j8dGLsXtll1pFlLSHPcOHS47ajvSxY9c"
    }

    async GetPhoto(){
        const response = await fetch(`https://api.unsplash.com/photos/random?query=${this.query}&client_id=${this.accesskey}`)
        if(response.ok){
            const data = await response.json()
            return data
        } else {
            throw Error(response.status)
        }
    }

    SetPhoto(photo){
        this.query= photo
    }
}