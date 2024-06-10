const { ApolloServer, gql }  = require("apollo-server");

const typeDefs = gql`
    type Query {
        totalDays: Int!
        allDays: [SkiDay!]!
    }
    type SkiDay{
        id: ID!
        date: String!
        mountain: String!
    }
`;

const resolvers = {

};

const server = new ApolloServer({
    typeDefs,
    mocks: true
});


server.listen().then(({url}) => 
    console.log(`Server running at ${url}`)
);
