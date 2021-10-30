# Fast.co Movies App

Deployed app: [http://fast-movies-app.herokuapp.com/](http://fast-movies-app.herokuapp.com/)


## How to run (node v14)

 1. `git clone git@github.com:danjiro/fast-movies.git`
 2. `cd fast-movies`
 3. `npm install`
 4. `npm start`

## How to test

 1. `npm run test`

## Questions

 1. What were the most difficult tasks?
   - Coming up with a reasonable UI that works decently on desktop and mobile
   - CSS/Tailwind
2. Did you learn anything new while completing this assignment?
  - Have not used Tailwind before so wanted to try to use it so it was a learning process
  - Axios cannot do simple requests (must honor CORs) while fetch can...
3. What did you not have time to add? What work took the up majority of your
time?
  - Lots of things, UI can be much improved, if added movie to playlist, the same movie should be listed as added in the search results so you cannot add it again
  - UI and Styling took the most time
4. How could the application be improved?
  - Search mechanism is not smooth can be improved
  - Tests can be more comprehensive
  - Sections of the site could be componentised bit more for cleaner code and readability
  - Could have used Typescript

## Assumptions

 - Wasn't sure what the confirmation screen was supposed to be so implemented it as an Add to playlist confirmation.
 - Not sure if using a design library was allowed so wanted to try out Tailwind for styling
 - Applied more general testing approach to overall application functionality
