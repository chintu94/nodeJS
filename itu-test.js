function calcAvgHeight(data) {
  // Calculate average height from received data. If no data, return null.
  let total = Object.keys(data).length;
  let averageHeight=0;

for (const i in data) {
  averageHeight += data[i].height;
}

console.log(averageHeight);
console.log(total);
return averageHeight/total;


}

var avgHeight = calcAvgHeight({
  Matt: { height: 174, weight: 69 },
  Jason: { height: 190, weight: 103 },
  chutiya: { height: 190, weight: 103 },
  Jasganduon: { height: 190, weight: 103 },
  gand: { height: 190, weight: 103 },
});
console.log(avgHeight);

/*
! Create a vanilla JS application that consumes the https://pokeapi.co/api/v2/pokemon/ API and displays a dropdown list of pokemons. When the user selects a pokemon from the dropdown, the application should make a second API call using the "url" returned in the first API call to fetch the pokemon's details, including its abilities, and display them on the page. Once the details are fetched, they should be cached and the application should not make another API call for that pokemon again.


const app = document.getElementById("app");

async function fetchPokemon() {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const pokemons = await data.json();
  return pokemons.results;
}

async function fetchPokemonDetails(url) {
  const data = await fetch(url);
  const details = await data.json();
  return details;
}

const applyBorder = (element) => {
  element.style.border = "1px solid";
};

const setupDropDown = async () => {
  const pokemons = await fetchPokemon();
  console.log(pokemons);
  const selectElement = document.createElement("select");
  pokemons.forEach(({ name, url }) => {
    const optionElement = document.createElement("option");
    optionElement.value = url;
    optionElement.innerText = name;
    selectElement.append(optionElement);
  });
  selectElement.addEventListener("change", async (e) => {
    const tableToBeDeleted = document.getElementById("delete-it");
    if (tableToBeDeleted) {
      tableToBeDeleted.remove();
    }
    const selectEl = e.target;
    const pokemonName = selectEl.options[selectEl.selectedIndex].text;
    const details = await fetchPokemonDetails(e.target.value);
    const { abilities } = details;
    const tableElement = document.createElement("table");
    applyBorder(tableElement);
    tableElement.id = "delete-it";
    const tHeadElem = document.createElement("thead");
    applyBorder(tHeadElem);
    ["name", "abilities"].forEach((thText) => {
      const th = document.createElement("th");
      applyBorder(th);
      th.innerText = thText;
      tHeadElem.append(th);
    });
    tableElement.append(tHeadElem);
    const tBodyElm = document.createElement("tbody");
    tBodyElm.style.border = "1px solid";
    const trElm = document.createElement("tr");
    trElm.style.border = "1px solid";
    const ab = abilities.map(({ ability }) => ability.name);
    [pokemonName, ab.join(",")].forEach((text) => {
      const tdElm = document.createElement("td");
      applyBorder(tdElm);
      tdElm.innerText = text;
      trElm.append(tdElm);
    });
    tBodyElm.append(trElm);
    tableElement.append(tBodyElm);
    app.append(tableElement);
  });
  app.append(selectElement);
};

setupDropDown();
*/


/*

! Create a vanilla js application that consumes the https://swapi.dev/api/people/ API and displays a dropdown containing a list of Star Wars characters. When a user selects a character from the dropdown, the application should make an API call to fetch the films the character has appeared in and the vehicles they have used, and display them in a table.

const app = document.getElementById("app");

async function fetchData(url) {
  const unparsedData = await fetch(url);
  const data = await unparsedData.json();
  return data;
}

async function generateTable(data) {
  const possibleElm = document.getElementById("delete-it");
  if (possibleElm) {
    possibleElm.remove();
  }
  const tableElm = document.createElement("table");
  tableElm.id = "delete-it";
  const theadElm = document.createElement("thead");
  const tbodyElm = document.createElement("tbody");
  const trElm = document.createElement("tr");
  data.forEach((i) => {
    const thElm = document.createElement("th");
    thElm.textContent = Object.keys(i)[0];
    theadElm.append(thElm);
    const tdElm = document.createElement("td");
    tdElm.textContent = Object.values(i)[0].join(",");
    trElm.append(tdElm);
  });
  tbodyElm.append(trElm);
  tableElm.append(theadElm);
  tableElm.append(tbodyElm);
  app.append(tableElm);
}

(async function setupDropDown() {
  const selectElm = document.createElement("select");
  const starWarsChars = await fetchData("https://swapi.dev/api/people");
  starWarsChars.results.forEach((char) => {
    const optionElm = document.createElement("option");
    optionElm.textContent = char.name;
    selectElm.append(optionElm);
  });
  selectElm.onchange = async (e) => {
    const charObj = starWarsChars.results.find(
      (char) => char.name === e.target.value
    );
    const films = await Promise.all(charObj.films.map((url) => fetchData(url)));
    const vehicles = await Promise.all(
      charObj.vehicles.map((url) => fetchData(url))
    );
    generateTable([
      {
        films: films.map((f) => f.title)
      },
      {
        vehicles: vehicles.map((v) => v.name)
      }
    ]);
  };
  app.append(selectElm);
})();

*/

/*
! Create a vanilla js application that consumes the https://fakestoreapi.com/carts/2 API and displays a list of products in the cart. For each product in the cart, the application should make an API call to fetch the product details using the ID returned in the cart API and display the product title, price, and image. Note: The https://fakestoreapi.com/products/:id: API returns details for a single product. You will need to make an API call for each product in the cart to fetch the product details.

const app = document.getElementById("app");

async function fetchData(url) {
  const unparsedData = await fetch(url);
  const data = await unparsedData.json();
  return data;
}

(async function getDetails() {
  const data = await fetchData("https://fakestoreapi.com/carts/2");
  console.log(data.products);
  const productsData = await Promise.all(
    data.products.map((product) =>
      fetchData(`https://fakestoreapi.com/products/${product.productId}`)
    )
  );
  console.log(productsData);
  productsData.forEach(({ title, image, price}) => {
    const divElm = document.createElement('div');
    const h3Elm = document.createElement('h3');
    h3Elm.textContent = title;
    const pElm = document.createElement('p');
    pElm.textContent = `$ ${price}`;
    const imgElm = document.createElement('img');
    imgElm.src = image;
    divElm.append(h3Elm);
    divElm.append(pElm);
    divElm.append(imgElm);
    app.append(divElm)
  })

})();

*/

/*
! Create a vanilla js application that consumes the https://fakestoreapi.com/products?sort=asc API and displays a list of products in ascending order based on price. The application should also include a dropdown to allow the user to change the sorting of the products between ascending and descending. When the user changes the sorting order, the application should update the query parameter value and fetch the products with the new sorting order.

const app = document.getElementById("app");

async function fetchData(url) {
  const unparsedData = await fetch(url);
  const data = await unparsedData.json();
  return data;
}
function createDataInDom(products) {
  const possibleElm = document.getElementById("delete-it");
  if (possibleElm) {
    possibleElm.remove();
  }
  products.forEach((product) => {
    const divElm = document.createElement("div");
    divElm.id = "delete-it";
    const h3Elm = document.createElement("h3");
    h3Elm.textContent = product.title;
    const pElm = document.createElement("p");
    pElm.textContent = `$ ${product.price}`;
    const imgElm = document.createElement("img");
    imgElm.style.width = "10rem";
    imgElm.src = product.image;
    divElm.append(h3Elm);
    divElm.append(pElm);
    divElm.append(imgElm);
    app.append(divElm);
  });
}

(async function () {
  const products = await fetchData(
    "https://fakestoreapi.com/products?sort=asc"
  );
  const selectElm = document.createElement("select");
  ["asc", "desc"].forEach((rule) => {
    const optionELm = document.createElement("option");
    optionELm.textContent = rule;
    selectElm.append(optionELm);
  });
  selectElm.onchange = async (e) => {
    console.log(e.target.value);
    const newData = await fetchData(
      `https://fakestoreapi.com/products?sort=${e.target.value}`
    );
    createDataInDom(newData);
  };
  app.append(selectElm);
  createDataInDom(products);
})();
*/

/*
! Create a vanilla js application that consumes the https://swapi.dev/api/people/ API and displays a table containing a list of Star Wars characters and the films they have appeared in and the vehicles they have used. The application should make multiple parallel API calls to fetch the film and vehicle details using the URLs returned in the first API call and display them in the table.
const app = document.getElementById("app");

async function fetchData(url) {
  const unparsedData = await fetch(url);
  const data = await unparsedData.json();
  return data;
}
async function generateTable(data) {
  const tableELm = document.createElement("table");
  const theadELm = document.createElement("thead");
  const tbodyELm = document.createElement("tbody");
  Object.keys(data[0]).forEach((title) => {
    const thElm = document.createElement("th");
    thElm.textContent = title;
    theadELm.append(thElm);
  });
  data.forEach((obj) => {
    const trElm = document.createElement("tr");
    Object.values(obj).forEach((value) => {
      const tdElm = document.createElement("td");
      if (typeof value === "string") {
        tdElm.textContent = value;
      } else {
        const tdData = value
          .map((obj) => (obj.title ? obj.title : obj.name))
          .join(",");
        tdElm.textContent = tdData;
      }
      trElm.append(tdElm);
    });
    tbodyELm.append(trElm);
  });
  tableELm.append(theadELm);
  tableELm.append(tbodyELm);
  app.append(tableELm);
}
(async function () {
  const { results } = await fetchData("https://swapi.dev/api/people/");
  console.log(results);
  const tableData = [];
  for (let i = 0; i < results.length; i++) {
    const acc = {};
    acc.name = results[i].name;
    acc.films = await Promise.all(results[i].films.map((i) => fetchData(i)));
    acc.vehicles = await Promise.all(
      results[i].vehicles.map((i) => fetchData(i))
    );
    console.log(acc);
    tableData.push(acc);
  }
  generateTable(tableData);
})();

*/

/*
! Create a vanilla js application that consumes the https://pokeapi.co/api/v2/pokemon/ API and displays a table containing a list of pokemon names and their abilities. The application should make multiple parallel API calls to fetch the pokemon details, including their abilities, and display them in the table.
const app = document.getElementById("app");

async function fetchData(url) {
  const unparsedData = await fetch(url);
  const data = await unparsedData.json();
  return data;
};

function generateTable(data){
  const table = document.createElement('table');
  const thead = table.createTHead();
  const tbody = table.createTBody();
  const tr = thead.insertRow();
  Object.keys(data[0]).forEach((key) => {
    const th = document.createElement('th');
    th.appendChild(document.createTextNode(key));
    tr.appendChild(th);
  });
  data.forEach((pokemon) => {
    const tr = tbody.insertRow();
    Object.values(pokemon).forEach((value) => {
      const td = tr.insertCell();
      td.textContent = value;
    })
  });
  app.append(table);
}

(async function () {
  const { results } = await fetchData('https://pokeapi.co/api/v2/pokemon/');
  const mainData = await Promise.all(
    results.map(({url}) => fetchData(url))
  );
  
  const tableData = mainData.map((pokemon) => {
    const obj = {};
    obj.name = pokemon.name;
    obj.abilities = pokemon.abilities.map(({ability}) => ability.name).join(',');
    return obj;
  });
  console.log(tableData);
  generateTable(tableData);

})();
*/




