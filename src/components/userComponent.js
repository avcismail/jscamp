import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";
import Customer from "../models/customer.js"

console.log("User Component yüklendi.");

let logger1 = new MongoLogger()
let userService = new UserService(logger1);

let user1 = new User(1, "Umutcan", "Avcı", "Antalya");
let user2 = new User(2, "Mustafa", "Çamkesen", "İstanbul");
let user3 = new User(3, "Ensar Batuhan", "Aydın", "Konya");

userService.add(user1);
userService.add(user2);
userService.add(user3);

//console.log(userService.list())

//console.log(userService.getById(1))

console.log("_________________________")
userService.load()

let customerToAdd = new Customer(1, "İsmail", "Avcı", "Antalya", 22, "100546")
customerToAdd.type = "customer"


userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())

// Prototyping
// let customer = {id:1, firstName:"Umutcan"}
// customer.lastName = "Avcı"
// console.log(customer.lastName)