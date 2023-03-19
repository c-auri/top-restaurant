import { Site } from "./Site";
import { Home } from './components/Home'
import { Menu } from './components/Menu'
import { Contact } from './components/Contact'

(function() {
    const title = "Tea House TOP"
    const pages = [
        new Home(),
        new Menu(),
        new Contact()
    ]

    new Site(title, pages).load()
})()