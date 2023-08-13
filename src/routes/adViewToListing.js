import { db } from "../database";

export const AddViewToListingRoute = {
    method:'POST',
    path:'/api/listings/{id}/add-view',
    handler : async (req,h)=>{
        const id = req.params.id;
        await db.query(
            'Update listings set views=views+1 where id = ?', [id]
        );
        const { results } = await db.query(
            'SELECT * FROM listings where id = ?  ',[id]
        );
        return results[0]
    }
}