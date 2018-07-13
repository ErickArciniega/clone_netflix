import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLNonNull,
    GraphQLInt
} from 'graphql';


export const RatingType = new GraphQLObjectType({
    
    name:"ListRatings",
    description:"Clasificaciones de la BD",
    fields: () => ({
        _id:{
            type:GraphQLNonNull(GraphQLID)
        },
        name:{
            type:GraphQLString
        },
        age:{
            type:GraphQLInt
        },
        is_active:{
            type:GraphQLBoolean
        }
    })

});

export const RatingInputType = new GraphQLInputObjectType({
    //esto es para el usuario
    name:"AddRatings",
    description:"Agrega, modifica nuevos generos a la BD",
    fields: () => ({

            name:{
                type:GraphQLString
            },
            description:{
                type:GraphQLString
            },
            age:{
                type:GraphQLInt
            }
        })

    });