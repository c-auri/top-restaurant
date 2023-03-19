export function getFooter() {
    const footer = document.createElement('footer')
    const copyright = document.createElement('span')
    copyright.innerHTML = '&copy;&nbsp;c-auri&nbsp;2023'

    footer.appendChild(copyright)

    return footer
}