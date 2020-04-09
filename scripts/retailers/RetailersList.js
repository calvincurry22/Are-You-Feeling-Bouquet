import { Retailer } from "./Retailer.js";
import { useRetailers } from "./retailerProvider.js";

const contentTarget = document.querySelector(".retailersContainer")

export const RetailersList = () => {

    const retailersCollection = useRetailers()

    retailersCollection.map(singleRetailer => {
        contentTarget.innerHTML += Retailer(singleRetailer)
    })

}