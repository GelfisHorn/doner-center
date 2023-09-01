const pizza = {
    title: "Pizzen",
    description: "Handwerklicher Geschmack in jeder Scheibe",
    menu: [
        {
            name: "Pizza Margherita",
            ingredients: "mit Tomatensoße und Käse",
            priceSmall: 7.5,
            priceBig: 8.5
        },
        {
            name: "Pizza Salami",
            ingredients: "mit Tomatensoße, Käse, Salami",
            priceSmall: 9.0,
            priceBig: 10.0
        },
        {
            name: "Pizza Schinken",
            ingredients: "mit Tomatensoße, Käse, Putenschinken",
            priceSmall: 9.0,
            priceBig: 10.0
        },
        {
            name: "Pizza Milano",
            ingredients: "mit Putenschinken und Salami",
            priceSmall: 9.0,
            priceBig: 10.0
        },
        {
            name: "Pizza Hawaii",
            ingredients: "mit Putenschinken und Ananas",
            priceSmall: 9.0,
            priceBig: 10.0
        },
        {
            name: "Pizza Funghi",
            ingredients: "mit Tomatensoße, Käse, Champignons",
            priceSmall: 9.0,
            priceBig: 10.0
        },
        {
            name: "Pizza Tonno",
            ingredients: "mit Thunfisch und Zwiebeln",
            priceSmall: 9.0,
            priceBig: 10.0
        },
        {
            name: "Pizza Mista",
            ingredients: "mit Putenschinken, Salami, Champignons, Zwiebeln, Peperoni",
            priceSmall: 9.0,
            priceBig: 10.0
        },
        {
            name: "Pizza Mozzarella",
            ingredients: "mit Mozzarella und Tomaten",
            priceSmall: 9.0,
            priceBig: 10.0
        },
        {
            name: "Pizza Karachi",
            ingredients: "mit Hähnchenbrust, Broccoli, Tomaten und Sauce Hollandaise",
            priceSmall: 9.0,
            priceBig: 10.0
        },
        {
            name: "Pizza Dj",
            ingredients: "mit Hähnchenbrust, Peperoni, Mais und Sauce Hollandaise",
            priceSmall: 9.0,
            priceBig: 10.0
        },
        {
            name: "Pizza Drehspieß",
            ingredients: "mit Dönerfleisch, Zwiebeln, Peperoni",
            priceSmall: 9.0,
            priceBig: 10.0
        },
        {
            name: "Pizza Vesivo",
            ingredients: "mit Salami, Champignons und Zwiebeln",
            priceSmall: 9.0,
            priceBig: 10.0
        },
        {
            name: "Pizza Veggie",
            ingredients: "mit Champignons, Mais, Paprika, Broccoli und Tomaten",
            priceSmall: 9.0,
            priceBig: 10.0
        },
        {
            name: "Pizza Calzone",
            ingredients: "mit Putenschinken, Salami, Peperoni, Zwiebeln, Broccoli, Champoignons",
            priceSmall: 10.0,
            priceBig: 11.5
        },
        {
            name: "Pizza City Calzone",
            ingredients: "mit Fleisch, Zwiebeln, Peperoni und Mais",
            priceSmall: 10.0,
            priceBig: 11.5
        },
        {
            name: "Pizza Drei Käse",
            ingredients: "mit Mozzarella, Gouda und Weißkäse",
            priceSmall: 9.0,
            priceBig: 10.0
        },
        {
            name: "Pizza Sucuk",
            ingredients: "mit türkischer Knoblauchwurst, Paprika, Zwiebeln",
            priceSmall: 9.0,
            priceBig: 10.0
        }
    ]
}
const rotisserie = {
    title: "Drehspieß",
    description: "Saftigkeit auf jedem Grillbissen",
    menu: [
        {
            name: "Drehspieß",
            ingredients: "mit Fleisch, Salat und Soße",
            price: 6.0
        },
        {
            name: "Drehspieß",
            ingredients: "Fleisch nur Fleisch und Soße",
            price: 7.0
        },
        {
            name: "Drehspieß Weißkäse",
            ingredients: "mit Fleisch, Salat, Weißkäse und Soße",
            price: 7.0
        },
        {
            name: "Mega Drehspieß",
            ingredients: "mit mehr Fleisch, Salat und Soße",
            price: 7.5
        },
        {
            name: "Mega Drehspieß Weißkäse",
            ingredients: "mit mehr Fleisch, Salat und Soße",
            price: 8.0
        },
        {
            name: "Drehspieß Hawaii",
            ingredients: "mit Fleisch, Ananas, Salat und Soße",
            price: 7.0
        },
        {
            name: "Schnitzel im Fladenbrot",
            ingredients: "mit Salat und Soße",
            price: 6.0
        },
        {
            name: "Veggie Fladenbrot",
            ingredients: "mit Weißkäse, Salat und Soße",
            price: 5.0
        },
        {
            name: "Türkische Pizza",
            ingredients: "mit Fleisch, Salat und Soße",
            price: 7.0
        },
        {
            name: "Türkische Pizza",
            ingredients: "mit Weißkäse, Salat und Soße",
            price: 5.0
        },
        {
            name: "Dürüm Teigrolle",
            ingredients: "mit Fleisch, Salat und Soße",
            price: 7.0
        },
        {
            name: "Fladenbrot",
            ingredients: "mit Soße",
            price: 2.0
        },
        {
            name: "Dürüm Veggie",
            ingredients: "Teigrolle mit Weißkäse, Salat und Soße",
            price: 5.5
        },
        {
            name: "Drehspießteller klein",
            ingredients: "mit Fleisch, Pommes, Salat und Soße",
            price: 8.5
        },
        {
            name: "Drehspießteller groß",
            ingredients: "mit Fleisch, Pommes, Salat und Soße",
            price: 10.0
        },
        {
            name: "Drehspießteller überbacken",
            ingredients: "mit Fleisch, Pommes, Käse überbacken",
            price: 10.0
        },
        {
            name: "Drehspieß-Box groß",
            ingredients: "mit Fleisch und Pommes",
            price: 7.0
        }
    ]
}
const salad = {
    title: "Salate",
    description: "Frische und Geschmack in jeder Mischung",
    menu: [
        {
            name: "Gemischter Salat",
            ingredients: "",
            price: 5.0
        },
        {
            name: "Gemischter Salat",
            ingredients: "mit Weißkäse",
            price: 5.5
        },
        {
            name: "Tonno Salat",
            ingredients: "Gemischter Salat mit Thunfisch & Peperoni",
            price: 6.5
        },
        {
            name: "Drehspieß-Salat",
            ingredients: "Gemischter Salat mit Fleisch",
            price: 6.5
        },
        {
            name: "Mozzarella Salat",
            ingredients: "mit Mozarella, Salat und Sauce",
            price: 6.5
        }
    ]
}
const german = {
    title: "Deutsche Gerichte",
    description: "Kulinarische Tradition aus Mitteleuropa",
    menu: [
        {
            name: "Pommes Frites",
            ingredients: "mit Ketchup oder Mayo",
            price: 4.0
        },
        {
            name: "Chicken Nuggets",
            ingredients: "6 Stk mit Pommes (für 9 Stk. +1,00)",
            price: 7.0
        },
        {
            name: "Hamburger",
            ingredients: "(für große Hamburger + 1,00)",
            price: 4.0
        },
        {
            name: "Cheeseburger",
            ingredients: "(für große Cheeseburger +0,50)",
            price: 4.5
        },
        {
            name: "Currywurst",
            ingredients: "mit Pommes",
            price: 7.0
        },
        {
            name: "Currywurst",
            ingredients: "mit Pommes und Salat",
            price: 8.0
        },
        {
            name: "Hähnchenschnitzel",
            ingredients: "mit Pommes",
            price: 8.0
        }
    ]
}
const baked = {
    title: "Überbackenes",
    description: "Frisch gebackene hausgemachte Köstlichkeiten",
    menu: [
        {
            name: "Drehspieß Champignon-Auflauf",
            ingredients: "Fleisch, Sahnesoße, Zwiebeln, Champignons, mit Käse überbacken, dazu Brot",
            price: 10.0
        },
        {
            name: "Drehspieß Broccoli-Auflauf",
            ingredients: "Fleisch, Sahnesoße, Broccoli, Käse überbacken, dazu Brot",
            price: 10.0
        },
        {
            name: "Drehspieß Nudel-Auflauf",
            ingredients: "Makkaroni, Fleisch, Zwiebeln, Sahnesoße, Käse überbacken, dazu Brot",
            price: 10.0
        }
    ]
}
const beverages = {
    title: "Getränke",
    description: "Erfrische dein Erlebnis mit einzigartigen Schlucken",
    menu: [
        {
            name: "Cola, Fanta, Sprite (0,33L)",
            price: 2.5
        },
        {
            name: "Fanta Exotic, Uludağ (0,33L)",
            price: 2.5
        },
        {
            name: "Cola, Fanta, Sprite (1L)",
            price: 3.0
        },
        {
            name: "Mineralwasser (0,5L)",
            price: 1.5
        },
        {
            name: "Diverse Säfte (0,33L)",
            price: 2.0
        },
        {
            name: "Ayran (0,25L)",
            ingredients: "mit Kohlensäure farbstoffhaltig, mit Süßungsmitteln, mit Antioxidationsmitteln",
            price: 1.5
        }
    ]
}

const menu = {
    pizza,
    rotisserie,
    salad,
    german,
    baked,
    beverages
}

export default menu;