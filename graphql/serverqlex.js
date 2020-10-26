const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = require('graphql')

const app =  express()

const authors = [
    {id: 1, name: 'TL Oakley'},
    {id: 2, name: 'Jones'}
]

const books = [
    { id: 1, name: 'Cars in 2020', authorId: 1},
    { id: 2, name: 'Wild Animals', authorId: 1},
    { id: 3, name: 'Tallest Buildings', authorId: 2},
    { id: 4, name: 'Organic Foods', authorId: 2}
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    description: 'This is a book written by an author',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString)},
        authorId: { type: GraphQLNonNull(GraphQLInt) },
        author: {
            type: AuthorType,
            resolve: (book) => {
                return authors.find(author => author.id === book.authorId)
            }
        }
    })
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: 'The author of a book',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString)},
        books: { 
            type: GraphQLNonNull(BookType),
            resolve: (author) => {
                return books.filter(book => book.authorId === author.id)
            }
        },
    })
})

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        books: {
            type: new GraphQLList(BookType),
            description: 'list of all books',
            resolve: () => books
        },
        authors: {
            type: new GraphQLList(AuthorType),
            description: 'list of all authors',
            resolve: () => authors
        }
    })
})

const schema = new GraphQLSchema({
    query: RootQueryType
})
/*
const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Hello World',
        fields: () => ({
            message: { 
                type: GraphQLString,
                resolve: () => 'HelloWorld'
            }
        })
    })
})
*/

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql:true
}))
app.listen(5000., () => console.log('server running'))

 

 