import { getHome } from "./home"
import { getMenu } from "./menu"
import { getContact } from "./contact"


export function getNav() {
    const nav = document.createElement('nav')
    const ul = document.createElement('ul')

    for (const item of navItems) {
        const li = document.createElement('li')
        li.innerHTML = item.name
        li.addEventListener("click", () => render(item))
        ul.appendChild(li)
    }

    nav.appendChild(ul)

    return nav
}

function render(item) {
    const main = document.querySelector('main')
    main.innerHTML = ''
    main.appendChild(item.getContent());
}

const navItems = [
    { name: "Home", getContent: getHome },
    { name: "Menu", getContent: getMenu },
    { name: "Contact", getContent: getContact },
]