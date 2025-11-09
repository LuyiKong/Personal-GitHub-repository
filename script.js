// store what the user has clicked
let selectedIngredients = [];

function pickIngredient(ingredient){
    // show selected ingredients in the input
    const input = document.getElementById("flavor-input");
    if (!selectedIngredients.includes(ingredient)){
        selectedIngredients.push(ingredient);
    }
    input.value = selectedIngredients.join(", ");

    // find matching flavors
    const resultDiv = document.getElementById("result");
    const notFoundDiv = document.getElementById("not-found");

    const matchingFlavors = [];

    //loop through each flavor and check
    for (const flavorName in flavors){
        const ingredients = flavors[flavorName];

        let hasAll = true;
        for (let i = 0; i < selectedIngredients.length; i++){
            if (!ingredients.includes(selectedIngredients[i])){
                hasAll = false;
                break;
            }
        }

        if (hasAll){
            matchingFlavors.push(flavorName);
        }
    }

    // show results
    if(matchingFlavors.length > 0){
        let html = "<h3>Matching flavors</h3><ul>";
        for (let i = 0; i < matchingFlavors.length; i++){
            html +="<li>" + matchingFlavors[i] + "</li>";
        }
        html += "</ul>";
        resultDiv.innerHTML = html;
        resultDiv.style.display = "block";
        notFoundDiv.style.display = "none";
    }else{
        resultDiv.style.display = "none";
        notFoundDiv.style.display = "block";
    }
}

//clear button
function clearSelection(){
    selectedIngredients = [];
    document.getElementById("flavor-input").value = "";
    document.getElementById("result").style.display = "none";
    document.getElementById("not-found").style.display = "none";
}

// flavor "database"
const flavors = {
    // ===== Scoop Shop: Original Ice Cream =====
    // source: https://www.benjerry.com/flavors/ice-cream-shop-flavors
    "Americone Dream": [
        "vanilla ice cream",
        "waffle cone",
        "caramel swirls"
    ],
    "Butter Pecan": [
        "buttery ice cream",
        "roasted pecans"
    ],
    "Cherry Garcia": [
        "cherry ice cream",
        "cherries",
        "fudge flakes"
    ],
    "Chocolate": [
        "chocolate ice cream",
    ],
    "Chocolate Chip Cookie Dough": [
        "vanilla ice cream",
        "chocolate chip cookie dough"
    ],
    "Chocolate Fudge Brownie": [
        "chocolate ice cream",
        "fudge brownies"
    ],
    "Chocolate PB Chunk": [
        "chocolate peanut butter ice cream",
        "peanut butter swirls",
        "fudge flakes"
    ],
    "Chunky Monkey": [
      "banana ice cream",
      "fudge chunks",
      "walnuts"
    ],
    "Churray for Churros!": [
        "buttery cinnamon ice cream",
        "churro pieces",
        "crunchy cinnamon swirls"
    ],
    "Coffee, Coffee BuzzBuzzBuzz": [
        "coffee ice cream",
        "espresso bean fudge chunks"
    ],
    "Gimme S'more!": [
        "toasted marshmallow ice cream",
        "chocolate cookie swirls",
        "graham cracker swirls",
        "fudge flakes"
    ],
    "Half Baked": [
        "chocolate ice cream",
        "vanilla ice cream",
        "fudge brownies",
        "chocolate chip cookie dough"
    ],
    "Impretzively Fudged": [
        "chocolate ice cream",
        "fudge-covered pretzel pieces",
        "pretzel swirls"
    ],
    "Lights! Caramel! Action!": [
        "vanilla ice cream",
        "salted caramel swirls",
        "graham cracker swirls",
        "chocolate chip cookie dough"
    ],
    "Mango": [
        "mango ice cream",
        "sweet cream ice cream"
    ],
    "Marshmallow Sky": [
        "marshmallow ice cream",
        "marshmallow swirls",
        "chocolate chip cookie dough"
    ],
    "Milk & Cookies": [
        "vanilla ice cream",
        "chocolate cookie swirls",
        "chocolate chip cookies",
    ],
    "Mint Chocolate Chunk": [
        "mint ice cream",
        "fudge chunks"
    ],
    "PB S'more": [
        "toasted marshmallow ice cream",
        "peanut butter cups",
        "graham cracker pieces",
        "marshmallow swirls"
    ],
    "Phish Food": [
        "chocolate ice cream",
        "gooey marshmallow swirls",
        "caramel swirls",
        "fudge fish"
    ],
    "Salted Caramel Blondie": [
        "sweet cream ice cream",
        "blonde brownies",
        "salted caramel swirls"
    ],
    "Strawberry": [
        "strawberry ice cream",
        "chunks of strawberries"
    ],
    "Strawberry Cheesecake": [
        "strawberry cheesecake ice cream",
        "strawberries",
        "graham cracker swirls"
    ],
    "Sweet Cream & Cookies": [
        "sweet cream ice cream",
        "chocolate sandwich cookies"
    ],
    "The Tonight Dough": [
        "caramel ice cream",
        "chocolate ice cream",
        "chocolate cookie swirls",
        "chocolate chip cookie dough",
        "peanut butter cookie dough"
    ],
    "Turtle Sundae": [
        "buttery ice cream",
        "fudge-covered almonds",
        "pretzel swirls"
    ],
    "UltraViolet": [
        "vanilla ice cream",
        "marshmallow swirls",
        "gluten-free chocolate cookies",
        "fudge flakes"
    ],
    "Vanilla": [
        "vanilla ice cream"
    ],
    "Vanilla Pretzel Fudge": [
        "vanilla ice cream",
        "pretzel swirls",
        "fudge chips",
        "chocolate mousse swirls"
    ],
};
