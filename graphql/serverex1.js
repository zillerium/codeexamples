const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        getHello: String,
        getPost (id: Int!): Post,
        posts: [Post]
    }

    type Mutation {
        createPost(title: String): Post
    }

    type Post {
        id: Int
        title: String
        comments: [Comment]
    }

    type Comment {
        text: String
        user: String
    }
`);

id = 4;
class Post {
    constructor(post) {
        Object.assign(this, post);
        this.comments = post.comments || [];
        this.id = id++;
    }

    async comments() {
        return new Promise((resolve) => {
            setTimeout (() => {
                resolve()
            }, 1000);
        })
    }
}

const posts = [
    {
        id: 1,
        title: 'this is first post',
        comments: [
            {
                text: 'this is my first comment',
                user: 'bob'
            }
        ]
    },
    {
        id: 2,
        title: 'this is second post',
        comments: [
            {
                text: 'this is my second comment',
                user: 'john'
            }
        ]
    },
    {
        id: 3,
        title: 'this is third post',
        comments: [
            {
                text: 'this is my first comment',
                user: 'bob'
            }
        ]
    },  
];

// resolver
const root = { 
    getHello: () => 'Hello World',
    getPost: ({id}) => {
        return new Post(posts.find(post => post.id === id));
    },
    posts: () => {
        return posts.map(post => new Post(post));
    },
    createPost: ({title}) => {
        const post = new Post({title})
        posts.push(post);
        return post;
    }
};

const app = express();

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        rootValue: root,
        graphiql: true
    })
);

app.listen(4000);