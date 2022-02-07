const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB');

const fruitSchema = new mongoose.Schema({
    name:String,
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
const fruit = new Fruit({ 
    name: 'Kiwi',
    rating:9,
    review:"God"
});
const fruit = new Fruit({ 
    name: 'Jack Fruit',
    rating:1,
    review:"🤮"
});
const fruit = new Fruit({ 
    name: 'Orange',
    rating:7,
    review:"Love and Hate"
});

person.save()

// fruit.save();