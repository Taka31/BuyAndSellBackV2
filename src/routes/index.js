import { AddViewToListingRoute } from "./adViewToListing";
import { createNewListingRoute } from "./creatNewListing";
import { deleteListingRoute } from "./deleteListing";
import { getAllListingsRoute } from "./getAllListings";
import { getListingRoute } from "./getListings";
import { getUserListingsRoute } from "./getUserListings";
import { UpdateListingRoute } from "./updateListing";

export default[
    getAllListingsRoute,
    getListingRoute,
    AddViewToListingRoute,
    getUserListingsRoute,
    createNewListingRoute,
    UpdateListingRoute,
    deleteListingRoute
];