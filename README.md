# Project Instructions

This app allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.

Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence concerned with the interactions between computers and human (natural) languages, in particular how to program computers to process and analyze large amounts of natural language data.

## Demo

<img src="/demo/homepage.png" width='500px' style="text-align:center;">

## Tech used

In this project I have involved the below :

- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls (hide the API key in .env)

In this project I use meaningCloud API to determine various attributes of an article or blog post.

## dependencies used in this project:

        "body-parser": "^1.19.0",
        "cors": "^2.8.5",
        "dotenv": "^8.2.0",
        "express": "^4.17.1",
        "node-fetch": "^3.1.0",
        "webpack": "^4.43.0",
        "webpack-cli": "^3.3.11"

        "@babel/core": "^7.5.4",
        "@babel/preset-env": "^7.5.4",
        "babel-loader": "^8.2.3",
        "clean-webpack-plugin": "^3.0.0",
        "css-loader": "^3.6.0",
        "html-webpack-plugin": "^3.2.0",
        "jest": "^27.3.1",
        "node-sass": "^4.14.1",
        "sass-loader": "^7.3.1",
        "style-loader": "^0.23.1",
        "webpack-dev-server": "^3.11.0"

## how to run this project

users can input url of articles or blogs in the form then click the button submit then users can get the analysis result through the NLP API.
