import { Site } from "./Site";
import { Home } from './components/Home'
import { Menu } from './components/Menu'
import { Contact } from './components/Contact'

(function() {
    const title = "Tea House TOP"
    const copyright = '&copy;&nbsp;c-auri&nbsp;2023'

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

    const contactInfo = 'Feel free to contact us during our opening hours.'

    const pages = [
        new Home(),
        new Menu(teas),
        new Contact(contactInfo)
    ]

    new Site(title, pages, copyright).load()
})()