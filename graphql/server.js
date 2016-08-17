// Import the required libraries
var graphql = require('graphql');
var graphqlHTTP = require('express-graphql');
var express = require('express');

var request = require('request');

var userType = new graphql.GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: graphql.GraphQLInt },
        name: { type: graphql.GraphQLString },
    }
});

var eventType = new graphql.GraphQLObjectType({
    name: 'Event',
    fields: {
        id: { type: graphql.GraphQLInt },
        likes: { type: graphql.GraphQLInt },
        title: { type: graphql.GraphQLString }
    }
});



var schema = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'Query',
        fields: {
            user: {
                type: userType,
                args: {
                    id: { type: graphql.GraphQLInt }
                },
                resolve: function (_, args) {
                    return new Promise((resolve) => {
                        request('http://localhost:3000/user/' + args.id, function (error, response, body) {
                            resolve(JSON.parse(body))
                        });
                    });
                }
            }
        }
    })
});

express()
    .use('/graphql', graphqlHTTP({ schema: schema, pretty: true, graphiql: true }))
    .listen(4000);

console.log('GraphQL server running on http://localhost:4000/graphql');