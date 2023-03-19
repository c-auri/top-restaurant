import { getHeader } from './components/header'
import { getFooter } from './components/footer'
import { getHome } from './components/home'

(function() {
    const body = document.querySelector('body')
    const main = document.createElement('main')

    body.appendChild(getHeader())
    body.appendChild(main)
    body.appendChild(getFooter())

    main.appendChild(getHome())
})();