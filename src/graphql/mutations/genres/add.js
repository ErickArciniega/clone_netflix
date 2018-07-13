import {
    GraphQLNonNull
} from 'graphql';

import Genre from '../../../models/genres';
import {GenreType,GenreInputType} from '../../types/genres';

export default {
    type:GenreType,
    args:{
        data:{
            type:new GraphQLNonNull(GenreInputType)
        }
    },
    resolve(root,params){
        const genre = new Genre(params.data);
        const newGenre = genre.save();
        if(!newGenre) throw new Error ("Error al crear un usuario");
        return newGenre;
    }
}