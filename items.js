// Kategóriák: 
// "Soda": "Üdítő",
// "Shot": "Rövidital",
// "Longdrink": "Longdrink",
// "Water":"Víz",
// "Cocktail":"Koktél",
// "Cup":"Pohár",
// "Other":"Egyéb",
// "Beer":"Sör",
// "Energydrink":"Energiaital",
// "Spritz":"Fröccs",
// "Wine":"Bor",
// "Champagne":"Pezsgő"


const itemPlace = document.getElementById('itemPlace');
const cardContainer = document.createElement('div');
cardContainer.className = 'row';
itemPlace.appendChild(cardContainer);

const cardElements = items.map(item => {
  const card = document.createElement('div');
  card.className = 'card-item';
card.innerHTML = `
<div id="itemButton" class="${item.category}">
<div class="card-body">
<h5 class="card-title" id="itemName">${item.name}</h5>
<h6 class="card-subtitle" id="itemAmount">${item.amount}</h6>
<p class="card-text" id="itemPrice">${item.price} Ft</p>
</div>
</div>
`;
    card.addEventListener('click', function() {
        addItemToList(item.name, item.price);
    });
    return card;
});

cardElements.forEach(card => {
    cardContainer.appendChild(card);
});

// Utolsó lépésként illeszd be az itemPlace-be
itemPlace.appendChild(cardContainer);

function addItemToList(name, price) {
    // Az új elem hozzáadása a listához
    var newItem = {
        name: name,
        price: price
    };
    items.push(newItem);

    // Frissítsd a megjelenítést, ha szükséges
    // Ehhez újra kell generálni a kártyákat
    cardContainer.innerHTML = '';
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card-item';
        card.innerHTML = `
        <div class="card" id="itemButton">
        <div class="card-body">
        <h5 class="card-title" id="itemName">${item.name}</h5>
        <h6 class="card-subtitle" id="itemAmount">${item.amount}</h6>
        <p class="card-text" id="itemPrice">${item.price} Ft</p>
        </div>
        </div>
        `;
        card.addEventListener('click', function() {
            addItemToList(item.name, item.price);
        });
        cardContainer.appendChild(card);
    });
}
