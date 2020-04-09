import { Retailer } from "./Retailer.js";
import { useRetailers } from "./retailerProvider.js";
import { useDistributors } from "../distributors/DistributorProvider.js";

const contentTarget = document.querySelector(".retailersContainer")

export const RetailersList = () => {

    const retailersCollection = useRetailers()
    const distributorsCollection = useDistributors()

    retailersCollection.map(singleRetailer => {
        const foundDistributor = distributorsCollection.find(singleDistributor => singleDistributor.id === singleRetailer.distributorId)
        contentTarget.innerHTML += Retailer(singleRetailer, foundDistributor)
    })

}