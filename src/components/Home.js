export class Home {
    title = "Home"

    #welcomeMessage

    constructor(welcomeMessage) {
        this.#welcomeMessage = welcomeMessage
    }

    render() {
        const home = document.createElement('section')

        const header = document.createElement('h2')
        header.textContent = 'Welcome to our tea house'
        home.appendChild(header)
        
        for (const paragraph of this.#welcomeMessage) {
            const p = document.createElement('p')
            p.textContent = paragraph
            home.appendChild(p)
        }

        return home
    }
}