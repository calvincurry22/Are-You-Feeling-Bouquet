import { getFlowers } from "./flowers/FlowerDataProvider.js";
import { FlowerList } from "./flowers/FlowerList.js";
import { RetailersList } from "./retailers/RetailersList.js";
import { getRetailers } from "./retailers/retailerProvider.js";
import { getDistributors } from "./distributors/DistributorProvider.js";



getFlowers()
    .then(getRetailers)
    .then(getDistributors)
    .then(FlowerList)
    .then(RetailersList)