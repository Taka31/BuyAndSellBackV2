import { db} from "../database";
import * as admin from "firebase-admin";

export const UpdateListingRoute = {

    method:'POST',
    path:'/api/listings/{id}',
    handler: async (req,h)=>{

        const token = req.headers.authtoken;
        const user = await admin.auth().verifyIdToken(token);
        const {id}=req.params;
        const {name, description,price}  = req.payload;
        const userId=user.user_id;

        await db.query(
            'UPDATE listings set name=?, description=?, price=? where id=? and user_id=?',[name,description,price,id,userId]
        );

        const { results } = await db.query(
            'SELECT * FROM listings where id= ? and user_id= ? ',[id,userId]
        )

        return results[0];
    }

}