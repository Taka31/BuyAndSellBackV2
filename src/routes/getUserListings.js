import { Boom } from "@hapi/boom";
import { db} from "../database";
import * as admin from "firebase-admin";

export const getUserListingsRoute = {
    method:'GET',
    path:'/api/users/{userId}/listings',
    handler: async(req,h)=>{
        const token = req.headers.authtoken;
        const user = await admin.auth().verifyIdToken(token);
        const userId = req.params.userId;

        if(user.user_id !== userId){
            throw Boom.unauthorized("Users can only accces to own listings")
        } 
       
        const { results } = await db.query(
            'Select * FROM listings where user_id = ? ',[userId]
        );       
        return results;
    }
}