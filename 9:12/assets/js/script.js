//Esercizio 1

const Person = function () {
    this.firstName = '';
    this.lastName ='';
    this.age = '';
    this.location = '';

    this.presentation = () => {
        return `${this.firstName} ${this.lastName} ha ${this.age} anni e vive a ${this.location}`
    }
}

const person1 = new Person();

person1.firstName = 'Mario';
person1.lastName = 'Rossi';
person1.age = 34;
person1.location = 'Roma';

console.log(person1.presentation());

const person2 = new Person();

person2.firstName = 'Vale';
person2.lastName = 'Rizzo';
person2.age = 22;
person2.location = 'Riva del Garda';

console.log(person2.presentation());



const Paragon = function (_firstName, _lastName, _age, _location){
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;

    this.Biggest = () => {
        if (person1.age >= person2.age){
            return `${person1.firstName} ${person1.lastName} ha ${person1.age} anni, vive a ${person1.location} ed è più vecchio di ${person2.firstName} ${person2.lastName} che ha ${person2.age} anni e vive a ${person2.location}`
        }
        else{
            return `${person2.firstName} ${person2.lastName} ha ${person2.age} anni, vive a ${person2.location} ed è più vecchio di ${person1.firstName} ${person1.lastName} che ha ${person1.age} anni e vive a ${person1.location}`
        }
    }
}

const person1Paragon = new Paragon();
const person2Paragon = new Paragon();

console.log(person1Paragon.Biggest(person1Paragon,person2Paragon));

//Esercizio 2

const btnAdd = document.getElementById('add');
const animalForm = document.getElementById('animalForm');
const owners = [];
let addedAnimals;

class Pets {
    constructor(_petName, _ownerName){
        this.petName = _petName;
        this.ownerName = _ownerName;
    }
}

const existanceOwner = (ownerName) => {
    for (let i = 0; i < owners.length; i++){
        if(owners[i].ownerName === ownerName){
            return true;
        }
    }
    return false;
};


const printAnimals = () =>{
    let addItem = document.getElementById('addItem');
    addItem.innerHTML= '';

    owners.forEach(o =>{
        let item = document.createElement('li');
        item.innerText = `L'animale si chiama ${o.petName} ed è di ${o.ownerName}`
        addItem.appendChild(item);
        console.log(owners)
    });
}

btnAdd.addEventListener('click', function(e) {
    e.preventDefault();
    const petName = document.getElementById('animalName').value;
    const ownerName = document.getElementById ('ownerName').value;
    const newPet = new Pets (petName, ownerName);
    owners.push(newPet);
    printAnimals();
    animalForm.reset();
})

/*btnAdd.addEventListener('click', (e) =>{
    e.preventDefault();
    let petName = document.getElementById('animalName').value;
    let ownerName = document.getElementById('ownerName').value;

})*/
