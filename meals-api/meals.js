function loadMeals(searchField){
   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchField}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

function displayMeals(meals){
    const mealContainer = document.getElementById('meal-container')
    mealContainer.innerText = '';
 for(const meal of meals){
   
    const newDiv = document.createElement('div');
    newDiv.classList.add('col')
    newDiv.innerHTML = `

    <div class="card">
    <img src="${meal.strMealThumb}">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text"> </p>
      <button onclick="loadIdMeal(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
        Details
      </button>

    </div>
  </div>
    
    `;
    mealContainer.appendChild(newDiv);
 }
}

document.getElementById('btn-field').addEventListener('click', function(){
    const searchField = document.getElementById('search-field').value
  
    loadMeals(searchField);
   
})

function loadIdMeal (idMeal){
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayIdMeal(data.meals[0]))
}

function displayIdMeal(meal){
    document.getElementById('exampleModalLabel').innerText = meal.strMeal
   const mealDetails = document.getElementById('mealDetail')
   mealDetails.innerHTML = `
   <img class="img-fluid" src="${meal.strMealThumb}">
   `
    console.log(mealDetails)
}
    

loadMeals('');