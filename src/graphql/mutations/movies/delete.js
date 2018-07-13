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
        }
    },
    resolve(root,params){
        const deleteMovie = Movies.findByIdAndRemove(params.id).exec()
        if(!deleteMovie) throw new Error("Error al borrar usuario");
        return deleteMovie;
    }
}