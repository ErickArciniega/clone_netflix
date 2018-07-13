import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import Movies from '../../../models/movies';
import {MovieType,MovieInputType} from '../../types/movies';

export default {
    type:MovieType,
    args:{
        id:{
            name:"ID",
            type:new GraphQLNonNull(GraphQLID)
        },
        data:{
            name:"data",
            type:new GraphQLNonNull(MovieInputType)
        }
    },
    resolve(root,params){
        return Movies.findByIdAndUpdate(params.id,
            {$set:{...params.data}}
        ).then((movies) => {
            return movies;
        }).catch((err) => {
            throw new Error("Error al hacer update")
        })
    }
}