export class Menu {
    title = "Menu"
    #teas

    constructor(teas) {
        this.#teas = teas
    }

    render() {
        const menu = document.createElement('section')

        const header = document.createElement('header')
        const paragraph = document.createElement('h2')

        paragraph.innerHTML = 'Try our teas, they are all very good!'

        header.appendChild(paragraph)
        menu.appendChild(header)

        for (const tea of this.#teas) {
            const article = document.createElement('article')
            const h = document.createElement('h2')
            const p = document.createElement('p')

            h.innerHTML = tea.heading
            p.innerHTML = tea.description

            article.appendChild(h)
            article.appendChild(p)

            menu.appendChild(article)
        }

        return menu
    }
}