import { Site } from "./Site";
import { Home } from './components/Home'
import { Menu } from './components/Menu'
import { Contact } from './components/Contact'

(function() {
    const pages = [
        new Home(),
        new Menu(),
        new Contact()
    ]

    new Site(pages).load()
})()