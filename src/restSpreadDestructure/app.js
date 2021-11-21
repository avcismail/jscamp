//Rest => Sonsuz elemanlı bir dizi oluşturabilir.

let showProducts = function (id, ...product) {
    console.log(id)
    console.log(product)
}

showProducts(10, "Elma", "Armut", "Karpuz")

//Spread => Bir dizi içerisindeki elemanları ayırabilir.

let numbers = [1,5,10,2,6,9,25,4,8]

console.log(Math.max(...numbers))
console.log(..."ABC", "D", ..."EFG", "H")

//Destructuring

let populations = ["5000", "20000", "750000"]
let [ilce, il, buyuksehir] = populations
console.log("İlçe Nüfusu En Az " + ilce + " Olmalı.")
console.log("İl Nüfusu En Az " + il + " Olmalı.")
console.log("Büyükşehir Nüfusu En Az " + buyuksehir + " Olmalı.")