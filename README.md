# Teachable Front-end Test

## Getting Started

Clone this repo (or make your own repo, read more about this in "Technical Requirements"). CD into the project folder and then run:

    yarn install

Once the installation is complete, run:

    npm start

## Project Instructions

You're going to be building a Ruby Gems search feature. Hit the search API and have the relevant gems show with the description of them, and links to their listed dependencies within this interface. Your app should be able to keep track of “favorites”, which are Gems the user has starred.

There are a few other notes and requirements:

- You should be able to add a search result to favorites in your UI.
- There should be some way to review and remove favorites.
- localStorage is fine for storage

## API

If you attempt to hit the Ruby Gems API directly you'll run into CORS issues. So we built
a proxy server for you. Just make your API requests to `http://localhost:3000/` instead
of `https://rubygems.org`. For example:

    curl http://localhost:3000/api/v1/search.json?query=rails

This server starts up automatically when you run `npm start`.

## Technical Requirements

This repo is based on webpack-babel-starter. You can add anything you like here, like React, Angular, or Vue for example. You can also completely ditch this repo and use your own starter or something like `create-react-app`.

## After You Finish

Once you’re done, push your changes onto a repo and share with us. If you get stuck at any point, reach out to your contact at Teachable and we can help you out.

Don't worry about creating a production build. We're more interested in your code in
action than seeing an optimized, production-ready app.
