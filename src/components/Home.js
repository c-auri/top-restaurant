export class Home {
    title = "Home"

    render() {
        const home = document.createElement('section')

        const header = document.createElement('h2')
        const paragraph = document.createElement('p')

        header.innerHTML = 'Welcome to our tea house'
        paragraph.innerHTML = 'Feel free to visit us in our opening hours to try our fine selection of teas.'

        home.appendChild(header)
        home.appendChild(paragraph)

        return home
    }
}