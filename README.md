# graphql-express

Based on a YT [tutorial 2019](`https://www.youtube.com/watch?v=ZQL7tL2S0oQ`) covering the basics of GraphQL.
**NOTE on Tutorial** it is filled with errors probably beacause it's outdated!

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

### Setting up the GraphQL schema.

5. First import the relevant libraris from graphql.
6. Define the schema and pass it into the app.use() method call

### A more complex data system

- So the steps are to define the query type, the actual model types (both using the `GraphQLObjectType constructor`). On each model type you give it a name, a description and define the fields fo that type. Only in the query you define the `resolve` function which is just the code to get data from the database or any other source.

7. Define a new `root query` type with fields for books and authors.
8. Define the graphql types for `Book` and `Author`
