const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB');

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({ 
    name: 'Apple',
    rating:7,
    review:"Good"
});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name:"Jack Reacher",
    age: 37
})
const kiwi = new Fruit({ 
    name: 'Kiwi',
    rating:9,
    review:"God"
});
const jackFruit = new Fruit({ 
    name: 'Jack Fruit',
    rating:1,
    review:"🤮"
});
const orange = new Fruit({ 
    name: 'Orange',
    rating:7,
    review:"Love and Hate"
});

// fruit.save()
// person.save()

// Fruit.insertMany([peach], function(err){
//     if (err){
//         console.log(err);
//     }else{
//         console.log("succes")
//     }
// });

Fruit.find(function(err, fruits){
    if (err){
        console.log(err);
    }else{
        console.log(fruits);
        fruits.forEach(function(fruit){
            console.log(fruit.name)
        })
    }
})

// Fruit.updateMany({_id:"62016627a6d630466c860386"}, {name:"Peach"}, function(err){
//     if (err){
//         console.log(err);
//     }else{
//         console.log("Hui")
//     }
// })

// Fruit.deleteOne({_id:"620167907ba42eb62ecbc436"},function(err){
//     if (err){
//         console.log(err);
//     }else{
//         console.log("HUI")
//     }
// })

// Fruit.deleteMany({name:"Apple"},function(err){
//     if (err){
//         console.log(err);
//     }else{
//         console.log("Bye Apple")
//     }
// })
