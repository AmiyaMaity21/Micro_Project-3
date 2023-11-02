let foodData = require('./food.json');
//Task-1
function listAllFoodItems() {
    return foodData;
}
//Task-2
function listVegetableFoodItems() {
    return foodData.filter((food) => food.category === 'Vegetable');
}
//Task-3
function listFruitFoodItems() {
    return foodData.filter((food) => food.category === 'Fruit');
}
//Task-4
function listProteinFoodItems() {
    return foodData.filter((food) => food.category === 'Protein');
}
//Task-5
function listNutsFoodItems() {
    return foodData.filter((food) => food.category === 'Nuts');
}
//Task-6
function listGrainFoodItems() {
    return foodData.filter((food) => food.category === 'Grain');
}
//Task-7
function listDairyFoodItems() {
    return foodData.filter((food) => food.category === 'Dairy');
}
//Task-8
function listFoodItemsAbovecalorie(calorie) {
    return foodData.filter((food) => food.calorie > calorie);
}
//Task-9
function listFoodItemsBelowcalorie(calorie) {
    return foodData.filter((food) => food.calorie < calorie);
}
//Task-10
function listFoodItemsByProtienContent() {
    return foodData.sort((a, b) => b.protiens - a.protiens);
}
//Task-11
function listFoodItemsByCabContent() {
    return foodData.sort((a, b) => a.cab - b.cab);
}

console.log('list all the food items');
console.log(listAllFoodItems());

console.log('list all the food items with category vegetables');
console.log(listVegetableFoodItems());

console.log('list all the food items with category fruit');
console.log(listFruitFoodItems());

console.log('list all the food items with category protien');
console.log(listProteinFoodItems());

console.log('list all the food items with category nuts');
console.log(listNutsFoodItems());

console.log('list all the food items with category grains');
console.log(listGrainFoodItems());

console.log('list all the food items with category dairy');
console.log(listDairyFoodItems());

console.log('list all the food items with calorie above 100');
console.log(listFoodItemsAbovecalorie(100));

console.log('list all the food items with calorie below 100');
console.log(listFoodItemsBelowcalorie(100));

console.log('\nlist all the food items with highest protien content to lowest');
console.log(listFoodItemsByProtienContent());

console.log('list all the food items with lowest cab content to highest');
console.log(listFoodItemsByCabContent());