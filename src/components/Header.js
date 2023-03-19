export class Header {
    #pages

    constructor(pages) {
        this.#pages = pages
    }

    render() {
        const header = document.createElement('header')

        const heading = document.createElement('h1')
        heading.textContent = 'Tea House TOP'

        const nav = new Navigation(this.#pages)

        header.appendChild(heading)
        header.appendChild(nav.render())

        return header
    }
}

class Navigation {
    #pages

    constructor(pages) {
        this.#pages = pages
    }

    render() {
        const nav = document.createElement('nav')
        const ul = document.createElement('ul')

        for (const page of this.#pages) {
            const li = document.createElement('li')
            li.innerHTML = page.title
            li.addEventListener("click", () => {
                const main = document.querySelector('main')
                main.innerHTML = ''
                main.appendChild(page.render())
            })
            ul.appendChild(li)
        }

        nav.appendChild(ul)

        return nav
    }
}