import { Header } from './components/Header'
import { Footer } from './components/Footer'

export class Site {
    #title
    #pages

    constructor(title, pages) {
        this.#title = title
        this.#pages = pages
    }

    load() {
        const body = document.querySelector('body')

        const header = new Header(this.#title, this.#pages)
        const main = document.createElement('main')
        main.appendChild(this.#pages[0].render())
        const footer = new Footer()

        body.appendChild(header.render())
        body.appendChild(main)
        body.appendChild(footer.render())
    }
}