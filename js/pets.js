const petsData = [
    {
      name: "Purrsloud",
      species: "Cat",
      favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
      birthYear: 2017,
      photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    },
    {
      name: "Barksalot",
      species: "Dog",
      birthYear: 2008,
      photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
    },
    {
      name: "Meowsalot",
      species: "Cat",
      favFoods: ["tuna", "catnip", "celery"],
      birthYear: 2012,
      photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
    }
];


var btnPets = document.getElementById('btnPets');
btnPets.addEventListener('click', function(){
    function age(year){
        let age = new Date().getFullYear() - year;
        if(age == 1){
            return '1 year old';
        }else if(age == 0){
            return 'Baby';
        }else{
            return `${age} years old`;
        }
    }
    function food(data){
        return `
            <h4> Favorite Food: </h4>
            <ul>
                ${data.map(fff => `<li>${fff}</li>`).join('')}
            </ul>
        
        `
    }
    function petTemplate(pet){
        return `
            <div class = "animal">
                <img src = "${pet.photo}"/>
                <div class = "description">
                    <h3>${pet.name} (${pet.species})</h3>
                    <h5><strong>Age:</strong> ${age(pet.birthYear)}</h5>
                    ${pet.favFoods ? food(pet.favFoods) : ''}
                </div>
            </div>
        `
    }
    document.getElementById("app").innerHTML = `
        <h1>Number of pets: <span>${petsData.length}</span> </h1>
        ${petsData.map(petTemplate).join('')}
    `;
    btnPets.classList.add('btn-hide');
});