# PokeAPI React Client

[![Netlify Status](https://api.netlify.com/api/v1/badges/6716dc2f-ebf0-4495-82ec-17c7bd20b849/deploy-status)](https://app.netlify.com/sites/superb-muffin-41e605/deploys)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run Locally

To run the app on your local computer you will need to have Node.js installed, this will include npm which will be used to run the project. Clone or download a zip of the source files and then use the following commands to get started:

```sh
cd /your-path-here/pokemon-3sc
```

```sh
npm install
```

```sh
npm start
```

## Features

- View and filter through all Pokemon on the main page
- Deep dive to an overview of specific Pokemon details
- Ability to add and remove Pokemon from a favourites list
- TODO: Filter Pokemon by Generation
- TODO: Compare Pokemon

## Libraries/Frameworks

- Node Sass - used to compile SCSS files on the fly
- React Bootstrap - speed up the UI build process
- React Icons - useful icons done simply
- React Router Dom - used to navigate through different pages or "routes"

## Challenges

- Its been a while since createing a similar app from scratch so needed to brush up on some knowledge (thanks google!)
- Wanted to adhere to the PokeAPI fair use policy so needed to find a simple and quick way to cache data (my solution is not the most practical for dynamic content but fine for this example)
- Deploying the project on Netlify seemed to give me 404 errors on routes, so needed to find a quick solution as I didnt anticipate that because I was using React Router
- Found it hard to think of a way to filter Pokemon by the generation as I didnt know enough about the subject

## Things I would do differently

- Adding Pokemon to favourites would be done in a different way, a new saved list of all favourites rather than adding a key to the existing object array because this presented problems when trying to identify if an item was already a favourite by filtering through all 1000+ items (i.e: the star on the details page doesnt hold a toggled state yet)

## Additional functionality

- Cache API data in local storage
- TODO: Pagination on Pokemon list (as there is over 1000 results on the request) 

## If I had more time I would

- Go outside :deciduous_tree:
- Have a coffee :coffee:
- Try forget about Pokemon, lol
- But in all seriousness, I would have refined the UI a bit more maybe
- Redesign the favourites system