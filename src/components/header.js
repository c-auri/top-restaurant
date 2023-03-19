import { getNav } from "./nav"

export function getHeader() {
    const header = document.createElement('header')
    const heading = document.createElement('h1')
    heading.textContent = 'Tea House TOP'

    header.appendChild(heading)
    header.appendChild(getNav())

    return header
}