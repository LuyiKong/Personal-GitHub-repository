function buildIngredientsTable() {
    const container = document.getElementById("ingredients-chart");
    if (!container) return;

    const table = document.createElement("table");
    table.className = "ingredients-table";

    //header row
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    const flavorHeader = document.createElement("th");
    flavorHeader.textContent = "Flavor Name";

    const ingredientsHeader = document.createElement("th");
    ingredientsHeader.textContent = "Ingredients";

    headerRow.appendChild(flavorHeader);
    headerRow.appendChild(ingredientsHeader);
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // body rows
    const tbody = document.createElement("tbody");

    Object.keys(flavorIngredients).forEach((flavorName) => {
        const tr = document.createElement("tr");

        //create id for each flavor
        tr.id = "flavor-" + flavorName.toLowerCase().replace(/[^a-z0-9]+/g, "-");

        const flavorCell = document.createElement("td");
        flavorCell.textContent = flavorName;

        const ingredientsCell = document.createElement("td");
        ingredientsCell.textContent = flavorIngredients[flavorName].join(", ");

        tr.appendChild(flavorCell);
        tr.appendChild(ingredientsCell);
        tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    container.appendChild(table);
}

//run when page loads
document.addEventListener("DOMContentLoaded", buildIngredientsTable);

// flavor "database"
const flavorIngredients = {
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
