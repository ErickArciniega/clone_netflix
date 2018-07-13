import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLNonNull
} from 'graphql';


export const UserType = new GraphQLObjectType({
    
    name:"ListUsers",
    description:"Usuarios de la BD",
    fields: () => ({
        _id:{
            type:GraphQLNonNull(GraphQLID)
        },
        name:{
            type:GraphQLString
        },
        lastname:{
            type:GraphQLString
        },
        email:{
            type:GraphQLString
        },
        photo:{
            type:GraphQLString
        },
        is_admin:{
            type:GraphQLBoolean
        },
        create_at:{
            type:GraphQLString
        },
        is_active:{
            type:GraphQLBoolean
        },
        /*Este es para el procesador de pagos*/
        client_id:{
            type:GraphQLString
        }
    })

});

export const UserInputType = new GraphQLInputObjectType({
    //esto es para el usuario
    name:"addUsers",
    description:"Agrega, modifica nuevos usuarios a la BD",
    fields: () => ({

        name:{
            type:GraphQLString
        },
        lastname:{
            type:GraphQLString
        },
        password:{
            type:GraphQLString
        },
        email:{
            type:GraphQLString
        },
        photo:{
            type:GraphQLString
        }

    })

});