import {
    GraphQLList
} from 'graphql';

import Genre from '../../../models/genres';
import {GenreType} from '../../types/genres';

const queryAllGenre = {

    type:new GraphQLList(GenreType),
    resolve(){
        const genres = Genre.find().exec()
        if(!genres) throw new Error ("Error al traer la BD")
        return genres;
    }


}

export default queryAllGenre;