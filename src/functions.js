function addToCart(productName = 'Dell Notebook', quantity) {
    console.log("Sepete Eklendi => Ürün : " + productName + " - Adet : " + quantity)
}

addToCart(undefined, 10)
addToCart()

console.log("_________________________________________")

let sayHello = () => {
    console.log("Hello World")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World 2")
}

sayHello2()

console.log("_________________________________________")

function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("Apple Notebook", 2, 15000)
addToCart2("Asus Notebook", 5, 11000)
addToCart2("Huawei Matebook X", 3, 12000)

console.log("_________________________________________")

let product1 = {
    productName: "Apple Notebook",
    quantity: 2,
    unitPrice: 15000,
}

let product2 = {
    productName: "Asus Notebook",
    quantity: 5,
    unitPrice: 11000,
}

let product3 = {
    productName: "Huawei Matebook X",
    quantity: 3,
    unitPrice: 12000,
}

function addToCart3(product) {
    console.log("Ürün : " + product1.productName + " - Adet : " + product1.quantity + " - Fiyat : " + product1.unitPrice)
}

addToCart3()

console.log("_________________________________________")
console.log("DEĞER VE REFERANS TİP KAVRAMLARI")

//Değer Tip
let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)

//Referans Tip
let product5 = {productName:"Elma", quantity: 5, unitPrice: 3}
let product6 = {productName:"Armut", quantity: 3, unitPrice: 2}
product5 = product6
product5.productName = "KARPUZ"
console.log(product6.productName)

console.log("_________________________________________")

function addToCart4(products) {
    console.log(products)
    
}

let products = [
    {productName:"Elma", quantity: 5, unitPrice: 3},
    {productName:"Armut", quantity: 5, unitPrice: 3},
    {productName:"Karpuz", quantity: 5, unitPrice: 3}
]

addToCart4(products)

console.log("_________________________________________")

function add(...numbers) {
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]
        
    }
    console.log(total)
}

add(20, 30)
add(20, 30, 40)
add(20, 30, 40, 50)

let numbers = [20,30,40,10,50,5,8]

console.log(Math.max(...numbers))

let [icAnadolu, marmara, karadeniz, [icAnadoluSehir, marmaraSehir, karadenizSehir]] = [
    {
        name: "İç Anadolu",
        population: "20M",
    }, 
    {
        name: "Marmara",
        population: "30M",
    }, 
    {
        name: "Karadeniz",
        population: "10M",
    }, 
    [
        [
            "Ankara",
            "Konya",
        ],
        [
            "İstanbul",
            "Bursa",
        ],
        [
            "Rize",
            "Trabzon",
        ]
    ]
]

console.log(icAnadolu)
console.log(marmara)
console.log(karadeniz)
console.log(icAnadoluSehir)
console.log(marmaraSehir)
console.log(karadenizSehir)

let newProductName, newQuantity, newUnitPrice
({productName:newProductName, quantity:newQuantity, unitPrice:newUnitPrice} = {productName:"Elma", quantity: 5, unitPrice: 3})
console.log(newProductName)