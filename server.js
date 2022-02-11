const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const app = express();

app.use(
	'/graphql',
	graphqlHTTP({
		graphiql: true,
	})
);

app.listen(5000, () => console.log('Server is running'));
