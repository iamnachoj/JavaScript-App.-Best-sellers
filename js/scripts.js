let pokemonRepository = (function(){
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function add(pokemon) {
     if (typeof pokemon === "object" &&
       "name" in pokemon &&
       "detailsUrl" in pokemon
     ) {
     pokemonList.push(pokemon);
       } else {
     console.log("This pokemons is not correct");
      }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon){
    let list = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    listItem.classList.add("group-list-item");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    button.setAttribute("data-toggle", "modal");
    button.setAttribute("data-target", "#modal");
    listItem.appendChild(button);
    list.appendChild(listItem);
    button.addEventListener("click", function(){
    showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function(json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url,
          height: item.url.height,
          weight: item.url.weight,
          image: item.url.sprites
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
   let url = item.detailsUrl;
   return fetch(url).then(function (response) {
     return response.json();
   }).then(function (details) {
     // Now we add the details to the item
     item.height = details.height;
     item.weight = details.weight;
     item.image = details.sprites

   }).catch(function (e) {
     console.error(e);
   });
 }

  function showDetails(pokemon){
   loadDetails(pokemon).then(()=>{
      let modalBody = document.querySelector(".modal-body");
      modalBody.innerHTML = "";
      let modalTitle = document.querySelector(".modal-title");
      modalTitle.innerHTML = "";

       // Add the modal content
      let title = document.createElement("h4");
      title.innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
      let heightElement = document.createElement("p");
      heightElement.innerText = (pokemon.height / 10) + " meters";
      if(heightElement.innerText === 1 + " meters"){heightElement.innerText = 1 + " meter"}

      let weightElement = document.createElement("p");
      weightElement.innerText = (pokemon.weight / 10) + " Kgs";

      let imgElement = document.createElement("img");
      imgElement.classList.add("img-pokemon");
      imgElement.src = pokemon.image.front_default;

      modalTitle.appendChild(title);
      modalBody.appendChild(heightElement);
      modalBody.appendChild(weightElement);
      modalBody.appendChild(imgElement);

   });
  }

  return{
    add: add,
    getAll: getAll,
    loadList: loadList,
    addListItem: addListItem,
  };

}());


pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
