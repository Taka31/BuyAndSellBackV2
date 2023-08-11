import { db} from "../database";
import Boom from "@hapi/boom";

export const getUserListingsRoute = {
    method:'GET',
    path:'/api/users/{userId}/listings',
    handler: async(req,h)=>{
        const userId = req.params.userId;
       
        const { results } = await db.query(
            'Select * FROM listings where user_id = ? ',[userId]
        );       
        return results;
    }
}