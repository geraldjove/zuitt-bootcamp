const name = document.querySelector('#name');
const level = document.querySelector('#level');
const type = document.querySelector('#type');
const description = document.querySelector('#description');

fetch('mongodb+srv://admin:admin@cluster0.irujsox.mongodb.net/')
.then(res => res.json())
.then(data => console.log(data))

// fetch('./pokemon.json', {
//     method: 'POST',
//     headers: {'content-type' : 'application/json'},
//     body: JSON.stringify({
//         name: "`${name.value}`",
//         level: "`${name.value}`",
//         type: "`${name.value}`",
//         description: "`${name.value}`"
        
// })
// })
