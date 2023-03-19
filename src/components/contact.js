export function getContact() {
    const contact = document.createElement('section')
    const heading = document.createElement('h2')
    const paragraph = document.createElement('p')

    heading.innerHTML = 'Contact'
    paragraph.innerHTML = 'Feel free to contact us during our opening hours.'

    contact.appendChild(heading)
    contact.appendChild(paragraph)

    return contact
}