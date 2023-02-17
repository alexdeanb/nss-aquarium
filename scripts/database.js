const database = {
    fish: [
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Fromia_monilis_%28Seastar%29.jpg",
            species: "Starfish",
            length: 4,
            name: "Starboy",
            location: "Pacific Ocean, AU",
            diet: "Algae"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/A._percula.jpg",
            species: "Percula Clownfish",
            length: 3,
            name: "Nemo",
            location: "Off coast of India",
            diet: "Algae, Worms"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Pterapogon_kauderni1.JPG",
            species: "Banggai Cardinalfish",
            length: 3,
            name: "Goth",
            location: "Banggai Islands, Indonesia",
            diet: "Plankton"
        },
        {
            image: "https://cdn.shopify.com/s/files/1/1713/4393/products/discus-fish-1943755_1920_2000x.jpg?v=1595009333",
            species: "Discus",
            length: 7,
            name: "Odyseus",
            location: "Amazon River, Brazil",
            diet: "Worms, Insects, Crustaceans"
        },
        {
            image: "https://www.abyssaquatics.co.uk/wp-content/uploads/2020/10/83735.jpg",
            species: "Emperor Angelfish",
            length: 14,
            name: "Artemis",
            location: "Pacific Ocean, Hawaii, US",
            diet: "Sponges, Algae"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}