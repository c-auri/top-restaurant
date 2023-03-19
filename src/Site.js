import { Header } from './components/Header'
import { Footer } from './components/Footer'

export class Site {
    #title
    #pages
    #copyright

    constructor(title, pages, copyright) {
        this.#title = title
        this.#pages = pages
        this.#copyright = copyright
    }

    load() {
        document.querySelector('title').innerHTML = this.#title

        const body = document.querySelector('body')

        const header = new Header(this.#title, this.#pages)
        const main = document.createElement('main')
        main.appendChild(this.#pages[0].render())
        const footer = new Footer(this.#copyright)

        body.appendChild(header.render())
        body.appendChild(main)
        body.appendChild(footer.render())
    }
}