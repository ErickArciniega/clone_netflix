import{GraphQLList} from 'graphql';

import Rating from '../../../models/ratings';
import {RatingType} from '../../types/ratings';

const queryAllRatings = {

    type:new GraphQLList(RatingType),
    resolve(){
        const ratings = Rating.find().exec()
        if(!ratings) throw new Error ("Error al traer la BD")
        return ratings;
    }

}

export default queryAllRatings;