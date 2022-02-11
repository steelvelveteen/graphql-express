# graphql-express

Based on a YT [tutorial 2019](`https://www.youtube.com/watch?v=ZQL7tL2S0oQ`) covering the basics of GraphQL

## Setup

1. `npm init -y`
2. `npm install express express-graphql graphql`
3. `npm install --save-dev nodemon`
4. Create the `server.js` file and add the app code to run on port 5000 and then run the command `npm run dev:start`. Test the browser on `localhost:5000`, you should get a `Cannot GET /` but that's fine.

**NOTE:** to run the express-graphql server you need to destructure it as seen here:

> `const { graphqlHTTP } = require('express-graphql');`

or

> `const graphqlHTTP = require('express-graphql').graphqlHTTP;`

Try now the browser at `localhost:5000/graphql` and you should get a nice error message `:)`
