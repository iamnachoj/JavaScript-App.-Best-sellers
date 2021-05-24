# JavaScript-App. Pokédex

# Project Goals
The Objective of this project is to build a small web application with HTML, CSS, and JavaScript that loads data from an external API and enables the viewing of data points (pokemons, of course) in detail. In addition to that, I use Bootstrap to perform several UI patterns such as Modals.

As soon as you open the site, you should be able to view a clean, minimal list of the API data (pokemon names), displayed in buttons that can be clicked to see more details and an image of each of the pokemon.

The App is full responsive and enabled in Chrome, Firefox, Safari, Edge, and Internet Explorer 11.

Here is the list and details of Pokemon provided by the external API (https://pokeapi.co/api/v2/pokemon/?limit=150).

# Key Features
- Load data from an external source (API)
- View a list of items
- On user action (e.g., by clicking on a list item), view details for that item

# Technical Requirements
- The app must load data from an external API; for instance, the Pokémon API.
- The app must display a list of items loaded from that API after the page is loaded.
- The app must enable the viewing of more details for a given list item (like a Pokémon) on
demand, such as when clicking on a list item.
- The app must have CSS styling.
- The JavaScript code must be formatted according to ESLint rules.
  - The JavaScript code may be formatted via Prettier.
  - The JavaScript code may be manually formatted.
- The app must use at least one additional complex UI pattern, such as a modal, for details or
touch interactions.
   -  The app may allow searching for items (e.g., searching for Pokémon).
- The app must not throw any errors when being used.
- The app should be deployed to a publicly accessible platform like GitHub Pages (you can
review how to do this in Intro to Frontend Development's Exercise 10: Code Quality, Testing, &
Web Hosting).
- The app must work in Chrome, Firefox, Safari, Edge, and Internet Explorer 11

# Tech stack:
- Html
- CSS
- JavaScript
- bootstrap (specially in the use of modals).
- ESlint rules can be found in the .eslintc file - This is for static code analysis

# Setup guide:
- clone the repository:  ``` git clone xxxx```
- Change directory: ```cd xxx```

# Deployment
### Deployment to github pages
 - Click this link to view demo  <a href="https://iamnachoj.github.io/JavaScript-App.-Pokedex/">LIVE DEMO</a>


In order to find the full code files, you will need to go to the file SRC.
Index.html is linked to the scripts and styles.css via the DIST file, which are the same but minified files.

To sum up, I put into practice data extraction from external API (parsing JSON), modals, use of technical CSS properties, IIFEs, Asynchronous code and performance and debugging.

