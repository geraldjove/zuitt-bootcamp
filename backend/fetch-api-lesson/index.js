fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then(res => res.json())
.then(data => showDitto(data));

let pokemonSection = document.querySelector("#pokemonSection");

const showDitto = (ditto) => {
	console.log(ditto.stats[1].stat.name)
	const {id, name, sprites, stats, types} = ditto;
	console.log(`This is a test for ${id} ${name} ${stats[0].stat.name} ${stats[0].base_stat} ${types[0].type.name}`)

	pokemonSection.innerHTML = 
	`
	<div class="d-flex justify-content-center mt-5">
            <div class="card" style="width: 18rem;">
                <img src=${sprites.front_default} class="card-img-top img-fluid" alt="...">
                <div class="card-body d-flex flex-column align-items-center">
                  <h1 class="card-title text-uppercase">${name}</h1>
                  <p class="card-text">
				  ${stats[0].stat.name}: ${stats[0].base_stat} | 
				  ${stats[1].stat.name}: ${stats[1].base_stat} | 
				  type: ${types[0].type.name}
				  </p>
                  <a href="#" class="btn btn-primary">Choose Pokemon</a>
                </div>
              </div>
        </div>
	`
}

