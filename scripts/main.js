import { getFlowers } from "./flowers/FlowerDataProvider.js";
import { FlowerList } from "./flowers/FlowerList.js";
import { RetailersList } from "./retailers/RetailersList.js";
import { getRetailers } from "./retailers/retailerProvider.js";
import { getDistributors } from "./distributors/DistributorProvider.js";
import { getNurseryFlowers } from "./nurseries/NurseryFlowersProvider.js";
import { getDistributorNurseries } from "./distributors/DistributorNurseryProvider.js";
import { getNurseries } from "./nurseries/NurseryDataProvider.js";



getFlowers()
    .then(getRetailers)
    .then(getDistributors)
    .then(getNurseryFlowers)
    .then(getNurseries)
    .then(getDistributorNurseries)
    .then(FlowerList)
    .then(RetailersList)
