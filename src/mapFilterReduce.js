let cart = [
    {id:1, productName: "Telefon", quantity: 3, unitPrice: 4000},
    {id:2, productName: "Bardak", quantity: 2, unitPrice: 30},
    {id:3, productName: "Kalem", quantity: 1, unitPrice: 20},
    {id:4, productName: "Şarj Cihazı", quantity: 2, unitPrice: 100},
    {id:5, productName: "Kitap", quantity: 3, unitPrice: 30},
    {id:6, productName: "Pot", quantity: 5, unitPrice: 150},
]

function addToCart(product) {
    product.push({id:7, productName: "Laptop", quantity: 1, unitPrice: 12000})
}
addToCart(cart)
console.log(cart)

// map

console.log("==>MAP<==")
console.log("<ul>")
cart.map(product=>{
    console.log("<li>" + product.productName + " : " + product.unitPrice * product.quantity + "</li>")
})
console.log("</ul>")

// filter

console.log("==>FILTER<==")
let quantityOver2 = cart.filter(product=>product.quantity>2)
console.log(quantityOver2)

// reduce

console.log("==>REDUCE<==")
let total = cart.reduce((acc, product)=> acc + product.unitPrice * product.quantity, 0)
console.log(total)