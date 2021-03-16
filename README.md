## Engineering Physics Student Association Website

This is a React website to be used for The UBC Engineering Physics Student Association. Its uses include recent announcements, course directory, community events, related contacts, etc. [Link](https://www.ubcfizz.com/)

## Dependencies

Before running the application, ensure that you have [NodeJs](https://nodejs.org/en/) installed. <br> Then type `npm install` in the root of your project directory. To run the app type `npm start`. This project was built on NodeJS version 5.

## Work Flow


### Building
After making your edits, to complete your build and push it to the `gh-pages` branch, run `npm run deploy`. [Read this](https://stackoverflow.com/questions/61821700/why-does-app-work-on-local-host-but-does-not-on-github-pages) if you run into any issues.
##### Issue Distribution

When you are working on a task (an **issue**), assign that issue to yourself on the "Issues" tab. Do not work on an issue you have not assigned yourself, because this will eventually lead to two or more people working on the same issue without knowing that others are also working on it. This wastes both time and effort. If it happens, a game of rock-paper-scissors will take place to determine who gets to merge their version to the master branch (just kidding!).

##### Version Control

Always make your own branch when working on a task. **Do not** work on the master branch. When you are done with the task, make a pull request and ask someone else on the team to look it over before merging it with the master branch. This is essential for preserving functionality. Once the pull request has been merged, delete the branch you used for the task.


## Code Organization

#### React Basics
React is a JavaScript library for building user interfaces (so mostly front-end). What is neat about it is that it organizes everything into "Components", which are like classes that you use as "variables". This allows you to create components that you can reuse around different parts of the website.

The code is structured in terms of this:

> `/node_modules` contains the node modules you have installed (since we use node.js for package management)

> `/src` contains the JS files that is used to create your website build; the components you create should be placed here

> `/public` contains the actual access point of the website; for our intents and purposes you probably will not need to change it that much

For more information on how to use React, visit the [official React documentation/tutorial guide](https://reactjs.org/docs/getting-started.html).

##### Server to be used

Has not yet been decided. Possibly AWS.

##### Database to be used

Has not yet been decided. 

##### Components

Every component should be organized into a folder that is named after that component's respective purpose. For example, the .css, .js, and any other related files to the home page that displays the landing banner, and announcements, should be placed inside a folder called "Home".

##### Naming convention 

The names of any **props, states, constants, variables, or arguments** should relate to their purpose in the code, to ensure readibility. 

##### Readibility

Any code you write should be readable for others on the team. This means that you should be liberal with spacing, indenting, and new lines. 


