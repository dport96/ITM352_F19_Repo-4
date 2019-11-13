//Format used from Lab13
products =
[
    {
        // Products 1
        "exotic": "Hedgehog",
        "price1": 96.00,
        "image1": "./image/hedgehog.png"
    },
    {
        // Products 2
        "exotic": "Chinchilla",
        "price2": "$150.00",
        "image2": "./image/chinchilla.png"
    },
    {
        // Products 3
        "exotic": "Bearded Dragon",
        "price3": "$60.00",
        "image3": "./image/bearded_dragon.png"
    },
    {
        // Products 4
        "exotic": "Axolotl",
        "price4": "$35.00",
        "image4": "./image/axolotl.png"
    },
    {
        // Products 5
        "exotic": "Tarantula",
        "price5": "$131.00",
        "image5": "./image/tarantula.png"
    }
];

if(typeof module != 'undefined') {
    module.exports.products = products;
  }