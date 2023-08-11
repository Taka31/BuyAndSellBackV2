import  { fakeListings } from './fake-data';

export const getAllListingsRoute = {
    method:'Get',
    path:'/api/listings',
    handler: (req,h)=>{
        return fakeListings;
    }
}