# Teachable Front-end Test

## Getting Started

To install, clone this repo

    yarn install
    
To run:

    npm start

## Project Instructions

Ruby Gem search - A simple site that takes in a search term, hits the [API](#api) and displays the returned results.

### Requirements

- Be able to search for Ruby Gems
- Display Ruby Gems search results
  - Name
  - Author
  - Description
  - Links to listed dependencies
- Be able to add/remove/view favorite Ruby Gems

There is no need to create a fancy and complex user interface but some level of design is required.

Minified/production ready builds are not a requirement.

## API

Attempting to hit the Ruby Gems API directly will result in CORS issues. A proxy server is provided for you.

Make API requests to `http://localhost:3000/` instead of `https://rubygems.org`.

For example:

    curl http://localhost:3000/api/v1/search.json?query=rails

This server starts up automatically when you run `npm start`.

## Technical Requirements

This repo is based on webpack-babel-starter. It is not a requirement to use any of it.

There are no restrictions on libraries, frameworks, packages or generators that you can use.

## After You Finish

Once you’re done, push your changes onto a repo and share with us.

<hr>

If you get stuck at any point, reach out to your contact at Teachable and we can help you out.
