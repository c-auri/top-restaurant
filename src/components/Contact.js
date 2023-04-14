export class Contact {
    title = "Contact"
    #info

    constructor(contactInfo) {
        this.#info = contactInfo
    }

    render() {
        document.body.classList.remove('menu')
        document.body.classList.remove('home')
        document.body.classList.add('contact')

        const contact = document.createElement('section')
        contact.classList.add('content')
        contact.classList.add('content--contact')
        const heading = document.createElement('h2')
        const paragraph = document.createElement('p')

        heading.innerHTML = 'Come Sip With Us'
        paragraph.innerHTML = this.#info

        contact.appendChild(heading)
        contact.appendChild(paragraph)

        return contact
    }
}