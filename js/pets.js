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
                    <h3><span>${pet.name}</span> <span style = "color: grey">(${pet.species})</span></h3>
                    <h5><strong>Age:</strong> <span>${age(pet.birthYear)}</span></h5>
                    ${pet.favFoods ? food(pet.favFoods) : ''}
                </div>
            </div>
        `
    }
    document.getElementById("app").innerHTML = `
        <h3 style = "float: left">Number of pets: <span>${petsData.length}</span></h3>
        ${petsData.map(petTemplate).join('')}
    `;
    btnPets.classList.add('btn-hide');
});