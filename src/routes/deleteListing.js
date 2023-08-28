import { db} from "../database";
import * as admin from "firebase-admin";

export const deleteListingRoute = {
    method:'DELETE',
    path:'/api/listings/{id}',
    handler : async (req,q)=>{

        const token = req.headers.authtoken;
        const user = await admin.auth().verifyIdToken(token);
        const userId = user.user_id;
        const id = req.params.id;

        await db.query(
            'DELETE FROM listings where id= ? And user_id= ? ',[id,userId]
        )

        return { message : 'Success'};
    }

}