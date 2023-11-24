let pokemonType = {

    pokemon:  function(name, level) {
        this.name = name;
        this.level = level;
        this.health = level * 2;
        this.attack = level;
        this.ability = [
            this.tackle = function tackle(target) {
                let attack = level;
                target.health = target.health - attack;
                console.log(name + ' has Tackled ' + target.name);
                console.log(target.name + ' lost ' + attack + ' HP');
                console.log('Remaining health for ' + target.name + ' is ' + target.health);
                if (target.health <= 0 && target.health >= -99){
                    console.log(target.name + ' has fainted.');
                    console.log('STOP IT IS ALREADY DEAD!')
                } else if (target.health <= -100){
                    console.log("I HOPE YOU'RE PROUD OF YOURSELF. PSYCHO!");
                };
            },
            this.slash = function slash(target) {
                let attack = Math.floor(Math.random() * level);
                target.health = target.health - attack;
                console.log(name + ' has Slashed ' + target.name);
                console.log(target.name + ' lost ' + attack + ' HP')
                console.log('Remaining health for ' + target.name + ' is ' + target.health);;
                if (target.health <= 0 && target.health >= -99){
                    console.log(target.name + ' has fainted.');
                    console.log('STOP IT IS ALREADY DEAD!')
                } else if (target.health <= -100){
                    console.log("I HOPE YOU'RE PROUD OF YOURSELF. PSYCHO!");
                };
            },
            this.hyperBeam = function hyperBeam(target) {
                let attack = Math.floor(Math.random() * level);
                target.health = target.health - attack;
                console.log(name + ' used Hyper Beam on ' + target.name);
                console.log(target.name + ' lost ' + attack+ ' HP');
                console.log('Remaining health for ' + target.name + ' is ' + target.health);
                if (target.health <= 0 && target.health >= -99){
                    console.log(target.name + ' has fainted.');
                    console.log('STOP IT IS ALREADY DEAD!')
                } else if (target.health <= -100){
                    console.log("I HOPE YOU'RE PROUD OF YOURSELF. PSYCHO!");
                };
            },
            this.bodySlam = function bodySlam(target) {
                let attack = Math.floor(Math.random() * level);
                console.log(name + ' used Body Slam on ' + target.name);
                target.health = target.health - attack;
                console.log(target.name + ' lost ' + attack + ' HP');
                console.log('Remaining health for ' + target.name + ' is ' + target.health);
                if (target.health <= 0 && target.health >= -99){
                    console.log(target.name + ' has fainted.');
                    console.log('STOP IT IS ALREADY DEAD!')
                } else if (target.health <= -100){
                    console.log("I HOPE YOU'RE PROUD OF YOURSELF. PSYCHO!");
                };
            },
            this.doubleEdge = function doubleEdge(target) {
                let attack = Math.floor(Math.random() * level);
                target.health = target.health - attack;
                console.log(name + ' used Double-Edge on ' + target.name);
                console.log(target.name + ' lost ' + attack + ' HP');
                console.log('Remaining health for ' + target.name + ' is ' + target.health);
                if (target.health <= 0 && target.health >= -99){
                    console.log(target.name + ' has fainted.');
                    console.log('STOP IT IS ALREADY DEAD!')
                } else if (target.health <= -100){
                    console.log("I HOPE YOU'RE PROUD OF YOURSELF. PSYCHO!");
                };
            }
        ];
    }
};

let pikachu = new pokemonType.pokemon('Pikachu', 38);
let geodude = new pokemonType.pokemon('Geodude', 46);
let mewtwo = new pokemonType.pokemon('MewTwo', 90);
let randomAttack = pokemonType.pokemon();
let randomAbility = pokemonType.ability;
const randomValue = [Math.floor(randomAbility.length * Math.random())]

// To try type the follow after adding a pokemon let "pokemon-name" = new pokemonType.pokemon('Name', 'Level');

// pokemon.ability[randomValue](target-pokemon);

alert('Welcome to my simple pokemon battle sims. I will still keep updating this program for practice.');
alert('Please open console log window to start.')
console.log('For now I only have 3 pokemons for battle. pikachu, geodude, and mewtwo.\nPlease type <pokemon-name>.ability[randomValue(<pokemon-name>) to start!') ;