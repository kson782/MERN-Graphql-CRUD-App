const {GraphQLSchema, GraphQLString, GraphQLList, 
    GraphQLObjectType, GraphQLNonNull} = require('graphql')
const Anime = require('../models/Anime')

const AnimeType = new GraphQLObjectType({
    name: 'Anime',
    fields: () => ({
        id: {type: GraphQLString},
        title: {type: GraphQLString},
        studio: {type: GraphQLString}
    })
})

const RootQueryType = new GraphQLObjectType({
    name: 'RootQuery',
    fields: () => ({
        animes: {
            type: new GraphQLList(AnimeType),
            resolve: (parent, args) => {
                return Anime.find();
            },
        },
        anime: {
            type: AnimeType,
            args: {
                id: {type: GraphQLString}
            },
            resolve: (parent, args) => {
                return Anime.findById(args.id);
            }
        }
    })
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        createAnime: {
            type: AnimeType,
            args: {
                title: {type: GraphQLString},
                studio: {type: GraphQLString},
            },
            resolve: (parent, args) => {
                const anime = new Anime({
                    title: args.title,
                    studio: args.studio,
                });
                return anime.save();
            },
        },
        deleteAnime: {
            type: AnimeType,
            args: {
                id: {type: GraphQLString}
            },
            resolve(parent, args) {
                return Anime.findByIdAndDelete(args.id)
            },
        },
        updateAnime: {
            type: AnimeType,
            args: {
                id: {type: GraphQLString},
                studio: {type: GraphQLString}
            },
            resolve(parent, args) {
                return Anime.findByIdAndUpdate(args.id, {
                    studio: args.studio
                },
                {new: true}
                )
            }
        }
    })
})

module.exports = new GraphQLSchema({
    query: RootQueryType,
    mutation: Mutation,
})