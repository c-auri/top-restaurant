import { Site } from "./Site";
import { Home } from './components/Home'
import { Menu } from './components/Menu'
import { Contact } from './components/Contact'
import './style.css'

(function() {
    const title = "Tea House TOP"

    const welcomeMessage = [ 
        "Welcome to our tea house, where we celebrate the rich traditions of Chinese tea culture. Our selection of premium Oolong teas, carefully sourced from the mountains of China, are expertly brewed using the Gongfu Cha method, ensuring that every cup is infused with the full depth of flavor.", 
        "Our knowledgeable and attentive staff are always happy to answer any questions you may have about our teas and brewing methods. So come and join us for a truly authentic tea experience, where every cup is a journey into the rich and fascinating world of tea." 
    ]

    const menuIntro = "Our menu features a carefully curated selection of premium teas, each steeped in tradition and culture. From the delicate sweetness of green tea to the robust richness of black tea, we offer a variety of flavors to satisfy every palate. Come and explore the unique qualities of each tea, and experience the art of Chinese tea like never before."

    const teas = [
        {
            "heading": "Golden Jade Green Tea",
            "description": "Our Golden Jade Green Tea is a delicate and refreshing tea that's perfect for any time of day. Grown in the lush green hills of Zhejiang province in China, this tea is harvested in early spring when the leaves are at their peak of freshness. With its bright golden liquor and smooth, buttery texture, this tea is a true treasure."
        },
        {
            "heading": "Iron Goddess Oolong",
            "description": "Our Iron Goddess Oolong, also known as Tie Guan Yin, is a medium-dark Oolong tea that's been hand-picked from the Anxi region in Fujian province, China. This tea is known for its smooth, creamy texture and floral aroma, with a lightly roasted flavor that's both refreshing and satisfying.  With its rich amber color and subtle hints of orchid and honey, Iron Goddess is a tea that's sure to please any Oolong lover."
        },
        {
            "heading": "Red Robe Oolong",
            "description": "Our Red Robe Oolong, also known as Da Hong Pao, is a medium dark oolong tea that's been hand-picked from the cliffs of the Wuyi Mountains in China. This tea has a rich, toasty flavor with hints of caramel and dark chocolate, and a smooth, velvety finish. With its deep amber color and complex aroma, this tea is truly a treat for the senses."
        },
        {
            "heading": "Yunnan Gold Black Tea",
            "description": "Our Yunnan Gold Black Tea is a premium tea hand-picked from the tea gardens in Yunnan province, China. This tea is made from the youngest and most tender tea leaves, carefully processed to produce a full-bodied tea with a smooth, malty flavor and a sweet, honey-like aroma."
        },
    ]

    const contactInfo = "We invite you to visit our tea house during our opening hours and enjoy a moment of relaxation with a cup of premium tea. Our cozy atmosphere provides the perfect setting to unwind and indulge in the art of tea. Feel free to come visit us within our opening hours."
    
    const copyright = '&copy;&nbsp;c-auri&nbsp;2023'

    const pages = [
        new Home(welcomeMessage),
        new Menu(menuIntro, teas),
        new Contact(contactInfo)
    ]

    new Site(title, pages, copyright).load()
})()