export class Footer {
    #copyright

    constructor(copyright) {
        this.#copyright = copyright
    }

    render() {
        const footer = document.createElement('footer')
        const span = document.createElement('span')
        span.innerHTML = this.#copyright

        footer.appendChild(span)

        return footer
    }
}