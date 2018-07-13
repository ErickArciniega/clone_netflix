import {GraphQLNonNull,GraphQLID} from 'graphql';
import Rating from '../../../models/ratings';
import {RatingType} from '../../types/ratings';

const querySigleRating = {

    type:RatingType,
    args:{
        id:{
            name:'ID',
            type:GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const ratings = Rating.findById(params.id).exec();
        return ratings;
    }

}
export default querySigleRating;