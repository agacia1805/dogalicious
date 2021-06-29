# Try DOGALICIOUS live!
https://codesandbox.io/s/mystifying-austin-dvmdn?file=/app.js

# Project introduction
***
Dogalicious - is an app created for all dog lovers who want to familiarize themselves with dog breeds and characteristics. You can either choose a random dog by clicking on the dice or search for a specific breed. This project concludes a 2-month study of JavaScript. Thus, our main focus was to make it fully functional. 

# Motivation
***
Developers of this project are dog lovers and when faced with a challenge to do their own app, we decided to create something we can identify with. 

# Work description
***
We wanted the visuals to be rather minimialist and intuitive. We added almost 250 different breeds. The linear icons we chose were pretty difficult to find online (we used mostly FlatIcon and https://www.dimensions.com/collection/dogs-dog-breeds) so we had to substitute some of them with a universal picture of a paw. During the work, it turned out that we had to redecorate some of them which was performed in Photoshop. 
***
Firstly, we sat down and started thinking about what the looks and practical side of our app - how we want it to look and work, what it is meant to do. Then, we made a visualisation and logical components. We knew we wanted the app to:
* show dog breeds and their characteristics alongside with the icons of dogs
* allow to search for a specific breed
* offer random breed search
***
Secondly, we started out with creating the page in HTML, which was a fast process - we aimed for minimalism, clarity and simplicity. We added styles in CSS and tried to stick to BEM methodology. Then, the time for JavaScript came. We fetched data from the Dog API with keys we accessed by signing up to the page. After that, our main points of the project were to: 
* find and display the matches
* add a function that removes the matches when clicked outside of the results list
* create an error message that says that something went wrong while fetching the data
* allow users to search for a random dog
* add dog icons to the UI

# API
*** 
While building the app, we used an external API - https://thedogapi.com/ and created our own icons to match our aesthetics. 

# Languages
***
* HTML5
* CSS3
* JavaScript

# IDEs
***
* PHP Storm
* Visual Studio Code

# Project status
***
The app is functional but there is still room for improvement. We noticed a few things that could be changed:
* search input - when we search for results, we get the whole list of dogs, this could be limited to just 5 or 10 and a scrollbar could be added
* to actually search for the breed, you have to click on the specific result from the list - we think it would be more accessible for PC computers users if we added an option for browsing through results with arrow keys
* while using tab - the list of results does not disappear which might not be the best user experience - someone has to click outside that list for it to disappear

These are the things we noticed, but if you see some other features that could be better, hit us up!
