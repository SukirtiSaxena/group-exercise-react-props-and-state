# Chuck Norris User Requirements

No pressure, but Chuck Norris needs a new website building in React. 😅

The following document is a list of User Requirements for the site. 

If the website isn't up to scratch, Chuck Norris *will* round house kick you in the face. 

The requirements are as follow:

## Requirement 1 - Chuck Card

- In `ChuckCard.js` the `<h2>` must display Chucks greeting (which is included in useState). To display Chucks greeting pass it down to `ChuckCard.js` through props. 

- In `ChuckCard.js` the `<img />` element must display a picture of Chuck (which is included in useState). To display Chucks picture pass it down to `ChuckCard.js` through props. 

- Hint: Check out this React (beta) documentation if you get stuck: https://beta.reactjs.org/learn/passing-props-to-a-component

## Requirement 2 - Chuck Info

- The page must display some information about Chuck. In `ChuckInfo.js` use props to display how many whales Chuck has saved and how many round house kicks he has done today.

## Requirement 3 - Chuck Jokes

- The page must display some jokes about Chuck. These jokes can be found in one of the useState declarations. Using what you know about JavaScript, `.map()` over jokes and return the `<ChuckJokes />` component underneath the heading "Jokes: ".

- Pass the joke down to `<ChuckJokes />` using props 

- Hint: Check the documentation if you need a hint: https://beta.reactjs.org/learn/rendering-lists#rendering-data-from-arrays

## Requirement 4 - Roundhouse to the FACE!

- In the "Kick me" button, add an onClick event that updates the roundHouseKicks by 1

- Hint: Check the React documentation to find out how: https://beta.reactjs.org/learn/responding-to-events#adding-event-handlers

## Extension 

- Underneath Jokes, create a heading with the text "Filtered Jokes: "

- Create a variable called `const filteredJokes` and assign some logic to it that filters jokes based on whether they have an id of 3

- Beneath the heading "Filtered Jokes: " map over filtered jokes. Only the joke with the id of 3 should appear

- Move the "Kick me" button and onClick event listener into the `<ChuckInfo />` component to make your code cleaner. To do this, you will need to create a function in `App.js` that handles roundHouseKick state and passes the function down to `ChuckInfo.js` to call. Can you figure out how?


## The End

Take a deep sigh of relief. You've survived Chuck...

This time. 