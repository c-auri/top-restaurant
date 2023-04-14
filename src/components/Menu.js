export class Menu {
    title = "Menu"
    #intro
    #teas

    constructor(intro, teas) {
        this.#intro = intro
        this.#teas = teas
    }

    render() {
        document.body.classList.remove('menu')
        document.body.classList.remove('contact')
        document.body.classList.add('menu')

        const menu = document.createElement('section')
        menu.classList.add('content--menu')

        const intro = document.createElement('article')
        intro.classList.add('content')

        const introHeader = document.createElement('h2')
        introHeader.innerHTML = 'Menu'
        intro.appendChild(introHeader)

        const introText = document.createElement('p')
        introText.innerHTML = this.#intro
        intro.appendChild(introText)

        menu.appendChild(intro)

        for (const tea of this.#teas) {
            const article = document.createElement('article')
            article.classList.add('content')

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