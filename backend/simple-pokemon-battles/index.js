const pokemonFriendlySection = document.querySelector("#pokemonFriendlySection");
const pokemonEnemySection = document.querySelector("#pokemonEnemySection");
const battleSection = document.querySelector("#battleSection")
const pickOne = document.querySelector("#pokemon1");
const pickTwo = document.querySelector("#pokemon2");
const startBattle = document.querySelector("#startBattle");
let firstPick;
let secondPick;
let isPokemonTurn = true;
let isPicked = true;

fetch('./pokemon.json')
.then(res=>res.json())
.then(data => PokemonCards(data));

const PokemonCards = (data) => {
    let pokemonEntries = "";
    
    data.map((pokemon)=>{
        const {id, name, img, level, description} = pokemon;
        pokemonEntries = pokemonEntries + `
        <div class="card mx-2" style="width: 15rem;" id="pokemon-${id}">
        <img src=${img} class="card-img-top img-fluid w-auto" alt="...">
        <div class="card-body d-flex flex-column text-center align-items-center">
        <h4 class="card-title text-uppercase">${name} LVL: ${level}</h4>
        <p class="card-text text-center">
        </p>
        <a href="#battleSection" class="btn btn-primary" onclick="PickPokemon('${name}', ${level})">Choose Pokemon</a>
        </div>
        </div>
        `
    })
    
    pokemonFriendlySection.innerHTML = pokemonEntries;
    pokemonEnemySection.innerHTML = pokemonEntries;
};

const PickPokemon = (name, level) => {
    console.log(name)
    name = new Pokemon(name, level);
    if (isPicked){
        pickOne.innerHTML = name.name;
        isPicked = false;
        firstPick = name;
        console.log(name)
    } else {
        pickTwo.innerHTML = name.name;
        isPicked = true;
        secondPick = name;
        console.log(name)
    }
    
};

class Pokemon{
    constructor(name, level){
        this.name = name;
        this.level = level;
        this.health = level * 2;
        this.attack = level;

        this.tackle = (target) => {
            target.health = target.health - this.attack;
            console.log(`${this.name} tackled ${target.name}`)
            console.log(`${target.name} lost ${target.health}`);
            battleSection.innerHTML = `
            <h3>${this.name} tackled ${target.name}</h3>
            <h3>${target.name} lost ${target.health} HP</h3>
            `
            if (target.health < 0){
                battleSection.innerHTML = `
                <h1>${this.name} WINS!</h1>
                `
               target.faint();
            }
        };

        this.faint = (name) => {
            alert(`${this.name} has fainted`)
        }
    };
};

startBattle.addEventListener('click', () => {
    if (isPokemonTurn){
        pickOne.innerHTML = 'Turn: ' + firstPick.name;
        pickTwo.innerHTML = secondPick.name;
        firstPick.tackle(secondPick);
        isPokemonTurn = false;
    } else {
        pickOne.innerHTML = firstPick.name;
        pickTwo.innerHTML = 'Turn: ' + secondPick.name;
        secondPick.tackle(firstPick);
        isPokemonTurn = true;
    }

});


