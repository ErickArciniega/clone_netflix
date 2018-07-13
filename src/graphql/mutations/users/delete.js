import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import User from '../../../models/users';
import {UserType,UserInputType} from '../../types/users';

export default {

    type:UserType,
    args:{
        id:{
            name:"ID",
            type:new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const deleteUser = User.findByIdAndRemove(params.id).exec()
        if(!deleteUser) throw new Error("Error al borrar usuario");
        return deleteUser;
    }
}