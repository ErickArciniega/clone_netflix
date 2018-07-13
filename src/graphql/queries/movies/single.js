import {GraphQLNonNull,GraphQLID} from 'graphql';
import Movies from '../../../models/movies';
import {MovieType} from '../../types/movies';

const querySingleMovie = {

    type:MovieType,
    args:{
        id:{
            name:'ID',
            type:GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const movies = Movies.findById(params.id).exec();
        return movies;
    }

}
export default querySingleMovie;