const meal = {
    "idMeal": "52889",
    "strMeal": "Summer Pudding",
    "strDrinkAlternate": null,
    "strCategory": "Dessert",
    "strArea": "British",
    "strInstructions": "Bring out the juices: Wash fruit and gently dry on kitchen paper – keep strawberries separate. Put sugar and 3 tbsp water into a large pan. Gently heat until sugar dissolves – stir a few times. Bring to a boil for 1 min, then tip in the fruit (not strawberries). Cook for 3 mins over a low heat, stirring 2-3 times. The fruit will be softened, mostly intact and surrounded by dark red juice. Put a sieve over a bowl and tip in the fruit and juice.\r\nLine the bowl with cling film and prepare the bread: Line the 1.25-litre basin with cling film as this will help you to turn out the pudding. Overlap two pieces of cling film in the middle of the bowl as it’s easier than trying to get one sheet to stick to all of the curves. Let the edges overhang by about 15cm. Cut the crusts off the bread. Cut 4 pieces of bread in half, a little on an angle, to give 2 lopsided rectangles per piece. Cut 2 slices into 4 triangles each and leave the final piece whole.\r\nBuild the pud: Dip the whole piece of bread into the juice for a few secs just to coat. Push this into the bottom of the basin. Now dip the wonky rectangular pieces one at a time and press around the basin’s sides so that they fit together neatly, alternately placing wide and narrow ends up. If you can’t quite fit the last piece of bread in it doesn’t matter, just trim into a triangle, dip in juice and slot in. Now spoon in the softened fruit, adding the strawberries here and there as you go.\r\nLet flavours mingle then serve: Dip the bread triangles in juice and place on top – trim off overhang with scissors. Keep leftover juice for later. Bring cling film up and loosely seal. Put a side plate on top and weight down with cans. Chill for 6 hrs or overnight. To serve, open out cling film then put a serving plate upside-down on top and flip over. serve with leftover juice, any extra berries and cream.",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/rsqwus1511640214.jpg",
    "strTags": "Summer",
    "strYoutube": "https://www.youtube.com/watch?v=akJIO6UhXtA",
    "strIngredient1": "Strawberries",
    "strIngredient2": "Blackberries",
    "strIngredient3": "Redcurrants",
    "strIngredient4": "Raspberries",
    "strIngredient5": "Caster Sugar",
    "strIngredient6": "Bread",
    "strIngredient7": "",
    "strIngredient8": "",
    "strIngredient9": "",
    "strIngredient10": "",
    "strIngredient11": "",
    "strIngredient12": "",
    "strIngredient13": "",
    "strIngredient14": "",
    "strIngredient15": "",
    "strIngredient16": "",
    "strIngredient17": "",
    "strIngredient18": "",
    "strIngredient19": "",
    "strIngredient20": "",
    "strMeasure1": "300g",
    "strMeasure2": "250g",
    "strMeasure3": "100g ",
    "strMeasure4": "500g",
    "strMeasure5": "175g",
    "strMeasure6": "7 Slices",
    "strMeasure7": "",
    "strMeasure8": "",
    "strMeasure9": "",
    "strMeasure10": "",
    "strMeasure11": "",
    "strMeasure12": "",
    "strMeasure13": "",
    "strMeasure14": "",
    "strMeasure15": "",
    "strMeasure16": "",
    "strMeasure17": "",
    "strMeasure18": "",
    "strMeasure19": "",
    "strMeasure20": "",
    "strSource": "https://www.bbcgoodfood.com/recipes/4516/summer-pudding",
    "strImageSource": null,
    "strCreativeCommonsConfirmed": null,
    "dateModified": null
}

function renderMeal(meal) {
    let nutrients = []
    for (let i=1; i <= 20; i++) {
        if (meal[`strMeasure${i}`] != "") {
            nutrients.push(`<li>${meal[`strIngredient${i}`]} : ${meal[`strMeasure${i}`]} </li>`)
        }
    }

    `

    `

    return `
    <div class="meal flex__container bd">
            <div class="meal__image flex__container flex__container--col lex--center--cross bd">
                <img src="https://www.themealdb.com/images/media/meals/rsqwus1511640214.jpg" alt="">
                <input class="meal__youtube" type="button" value="Go Youtube">
            </div>
            <div class="meal__information flex__container bd">
                <div class="meal__information--left bd">
                    <h1 style="font-size: 48px;">Summer Pudding</h1>
                    <ul class="meal__information_materials flex__container--col">
                        <li>Olive Oil: 1 tblsp</li>
                        <li>Olive Oil: 1 tblsp</li>
                        <li>Olive Oil: 1 tblsp</li>
                        <li>Olive Oil: 1 tblsp</li>
                        <li>Olive Oil: 1 tblsp</li>
                        <li>Olive Oil: 1 tblsp</li>
                        <li>Olive Oil: 1 tblsp</li>
                        <li>Olive Oil: 1 tblsp</li>
                        <li>Olive Oil: 1 tblsp</li>
                        <li>Olive Oil: 1 tblsp</li>
    
                        <li>Olive Oil: 1 tblsp</li>
                        <li>Olive Oil: 1 tblsp</li>
                        <li>Olive Oil: 1 tblsp</li>
                        <li>Olive Oil: 1 tblsp</li>
                        <li>Olive Oil: 1 tblsp</li>
                        <li>Olive Oil: 1 tblsp</li>
                        <li>Olive Oil: 1 tblsp</li>
                        <li>Olive Oil: 1 tblsp</li>
                        <li>Olive Oil: 1 tblsp</li>
                        <li>Olive Oil: 1 tblsp</li>
                    </ul>
                </div>

                <div class="meal__information--right bd">
                    <p>Bring out the juices: Wash fruit and gently dry on kitchen paper – keep strawberries separate. Put sugar and 3 tbsp water into a large pan. Gently heat until sugar dissolves – stir a few times. Bring to a boil for 1 min, then tip in the fruit (not strawberries). Cook for 3 mins over a low heat, stirring 2-3 times. The fruit will be softened, mostly intact and surrounded by dark red juice. Put a sieve over a bowl and tip in the fruit and juice.\r\nLine the bowl with cling film and prepare the bread: Line the 1.25-litre basin with cling film as this will help you to turn out the pudding. Overlap two pieces of cling film in the middle of the bowl as it’s easier than trying to get one sheet to stick to all of the curves. Let the edges overhang by about 15cm. Cut the crusts off the bread. Cut 4 pieces of bread in half, a little on an angle, to give 2 lopsided rectangles per piece. Cut 2 slices into 4 triangles each and leave the final piece whole.\r\nBuild the pud: Dip the whole piece of bread into the juice for a few secs just to coat. Push this into the bottom of the basin. Now dip the wonky rectangular pieces one at a time and press around the basin’s sides so that they fit together neatly, alternately placing wide and narrow ends up. If you can’t quite fit the last piece of bread in it doesn’t matter, just trim into a triangle, dip in juice and slot in. Now spoon in the softened fruit, adding the strawberries here and there as you go.\r\nLet flavours mingle then serve: Dip the bread triangles in juice and place on top – trim off overhang with scissors. Keep leftover juice for later. Bring cling film up and loosely seal. Put a side plate on top and weight down with cans. Chill for 6 hrs or overnight. To serve, open out cling film then put a serving plate upside-down on top and flip over. serve with leftover juice, any extra berries and cream.</p>
                </div>
    `
}
let main = document.querySelector("#main")
let random_btn = document.querySelector("#random")
let search_btn = document.querySelector("#search")
let search_inp = document.querySelector("#inp")
let firstMealHTML = renderMeal(meal)

random_btn.addEventListener("click",async ()=> {
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    let body = await response.json
    let meal = body.meals[0]
    main.in
})

