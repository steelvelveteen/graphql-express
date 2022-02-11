const { authors, books } = require('./database');

const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;

const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLInt,
	GraphQLNonNull,
} = require('graphql');

const app = express();

const RootQueryType = new GraphQLObjectType({
	name: 'Query',
	description: 'Root Query',
	fields: () => ({
		books: {
			type: new GraphQLList(BookType),
			description: 'List of books',
			resolve: () => books,
		},
		authors: {
			type: new GraphQLList(AuthorType),
			description: 'List of all authors',
			resolve: () => authors,
		},
	}),
});

const BookType = new GraphQLObjectType({
	name: 'Book',
	description: 'This represents a book written by an author',
	fields: () => ({
		id: { type: new GraphQLNonNull(GraphQLInt) },
		name: { type: new GraphQLNonNull(GraphQLString) },
		authorId: { type: new GraphQLNonNull(GraphQLInt) },
		author: {
			type: AuthorType,
			resolve: book => authors.find(author => author.id == book.authorId),
		},
	}),
});

const AuthorType = new GraphQLObjectType({
	name: 'Author',
	description: 'This represents an author',
	fields: () => ({
		id: { type: new GraphQLNonNull(GraphQLInt) },
		name: { type: new GraphQLNonNull(GraphQLString) },
	}),
});

const schema = new GraphQLSchema({
	query: RootQueryType,
});
// const schema = new GraphQLSchema({
// 	query: new GraphQLObjectType({
// 		name: 'helloworld',
// 		fields: () => ({
// 			message: {
// 				type: GraphQLString,
// 				resolve: () => 'Hello World',
// 			},
// 		}),
// 	}),
// });

app.use(
	'/graphql',
	graphqlHTTP({
		schema: schema,
		graphiql: true,
	})
);

app.listen(5000, () => console.log('Server is running'));
