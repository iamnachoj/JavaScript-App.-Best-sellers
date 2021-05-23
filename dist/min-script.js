let pokemonRepository = (function () {
  let e = [],
    t = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  function n(t) {
    'object' == typeof t && 'name' in t && 'detailsUrl' in t
      ? e.push(t)
      : /* eslint-disable no-console */
        console.log('This pokemons is not correct');
    /* eslint-enable no-console */
  }
  return {
    add: n,
    getAll: function () {
      return e;
    },
    loadList: function () {
      return fetch(t)
        .then(function (e) {
          return e.json();
        })
        .then(function (e) {
          e.results.forEach(function (e) {
            n({
              name: e.name,
              detailsUrl: e.url,
              height: e.url.height,
              weight: e.url.weight,
              image: e.url.sprites,
            });
          });
        })
        .catch(function (e) {
          /* eslint-disable no-console */
          console.error(e);
          /* eslint-enable no-console */
        });
    },
    addListItem: function (e) {
      let t = document.querySelector('.pokemon-list'),
        n = document.createElement('li');
      n.classList.add('group-list-item');
      let o = document.createElement('button');
      (o.innerText = e.name),
        o.classList.add('button-class'),
        o.setAttribute('data-toggle', 'modal'),
        o.setAttribute('data-target', '#modal'),
        n.appendChild(o),
        t.appendChild(n),
        o.addEventListener('click', function () {
          !(function (e) {
            (function (e) {
              let t = e.detailsUrl;
              return fetch(t)
                .then(function (e) {
                  return e.json();
                })
                .then(function (t) {
                  (e.height = t.height),
                    (e.weight = t.weight),
                    (e.image = t.sprites);
                })
                .catch(function (e) {
                  /* eslint-disable no-console */
                  console.error(e);
                  /* eslint-enable no-console */
                });
            })(e).then(() => {
              let t = document.querySelector('.modal-body');
              t.innerHTML = '';
              let n = document.querySelector('.modal-title');
              n.innerHTML = '';
              let o = document.createElement('h4');
              o.innerText = e.name.charAt(0).toUpperCase() + e.name.slice(1);
              let i = document.createElement('p');
              (i.innerText = e.height / 10 + ' meters'),
                '1 meters' === i.innerText && (i.innerText = '1 meter');
              let r = document.createElement('p');
              r.innerText = e.weight / 10 + ' Kgs';
              let l = document.createElement('img');
              l.classList.add('img-pokemon'),
                (l.src = e.image.front_default),
                n.appendChild(o),
                t.appendChild(i),
                t.appendChild(r),
                t.appendChild(l);
            });
          })(e);
        });
    },
  };
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (e) {
    pokemonRepository.addListItem(e);
  });
});
