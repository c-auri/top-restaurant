export function getMenu() {
    const menu = document.createElement('section')

    const header = document.createElement('header')
    const paragraph = document.createElement('h2')

    paragraph.innerHTML = 'Try our teas, they are all very good!'

    header.appendChild(paragraph)
    menu.appendChild(header)

    for (const tea of teas) {
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

const teas = [
    {
        "heading": "A tea you need to try",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere id metus sed elementum. Suspendisse feugiat orci vel ligula dapibus. "
    },
    {
        "heading": "A tea you need to try",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere id metus sed elementum. Suspendisse feugiat orci vel ligula dapibus. "
    },
    {
        "heading": "A tea you need to try",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere id metus sed elementum. Suspendisse feugiat orci vel ligula dapibus. "
    },
    {
        "heading": "A tea you need to try",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere id metus sed elementum. Suspendisse feugiat orci vel ligula dapibus. "
    },
]