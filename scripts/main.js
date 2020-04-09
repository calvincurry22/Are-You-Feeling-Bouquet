import { getFlowers } from "./flowers/FlowerDataProvider.js";
import { FlowerList } from "./flowers/FlowerList.js";
import { RetailersList } from "./retailers/RetailersList.js";
import { getRetailers } from "./retailers/retailerProvider.js";



getFlowers()
    .then(getRetailers)
    .then(FlowerList)
    .then(RetailersList)