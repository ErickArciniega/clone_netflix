import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLNonNull,
} from 'graphql';


export const GenreType = new GraphQLObjectType({
    
    name:"ListGenres",
    description:"Generos de la BD",
    fields: () => ({
        _id:{
            type:GraphQLNonNull(GraphQLID)
        },
        name:{
            type:GraphQLString
        },
        description:{
            type:GraphQLString
        },
        is_active:{
            type:GraphQLBoolean
        }
    })

});

export const GenreInputType = new GraphQLInputObjectType({
    //esto es para el usuario
    name:"AddGenres",
    description:"Agrega, modifica nuevos generos a la BD",
    fields: () => ({

            name:{
                type:GraphQLString
            },
            description:{
                type:GraphQLString
            }
        })

    });