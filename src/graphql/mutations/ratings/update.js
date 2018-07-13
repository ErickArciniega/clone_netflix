import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import Rating from '../../../models/ratings';
import {RatingType,RatingInputType} from '../../types/ratings';

export default {
    type:RatingType,
    args:{
        id:{
            name:"ID",
            type:new GraphQLNonNull(GraphQLID)
        },
        data:{
            name:"data",
            type:new GraphQLNonNull(RatingInputType)
        }
    },
    resolve(root,params){
        return Rating.findByIdAndUpdate(params.id,
            {$set:{...params.data}}
        ).then((ratings) => {
            return ratings;
        }).catch((err) => {
            throw new Error("Error al hacer update")
        })
    }
}