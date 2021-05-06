let pokemonRepository = (function(){
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon, height, type) {
    if (typeof(pokemon) !== "string") {
      console.log("the pokemon you are trying to add needs to have a name that is a string");
    } else { if(typeof(height) !== "number"){
      console.log("the pokemon you are trying to add needs to have a height shown in number");
    } else{ if(Array.isArray(type) !== true){console.log("the pokemon you are trying to add needs to have a type shown in an array");} else{
      pokemonList.push({
        name: pokemon,
        height: height,
        type: type
      });
    }}}
  }

  function getAll() {
    return pokemonList;
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }
  
  return{
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  };

}());

pokemonRepository.getAll().forEach(function myLoopPokemon(pokemon) {
pokemonRepository.addListItem(pokemon);
});
