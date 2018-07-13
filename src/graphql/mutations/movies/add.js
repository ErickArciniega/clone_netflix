import {
    GraphQLNonNull
} from 'graphql';

import Movies from '../../../models/movies';
import {MovieType,MovieInputType} from '../../types/movies';

export default {
    type:MovieType,
    args:{
        data:{
            type:new GraphQLNonNull(MovieInputType)
        }
    },
    resolve(root,params){
        const movies = new Movies(params.data);
        const newMovie = movies.save();
        if(!newMovie) throw new Error ("Error al crear un usuario");
        return newMovie;
    }
}