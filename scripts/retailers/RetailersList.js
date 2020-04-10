import { Retailer } from "./Retailer.js";
import { useRetailers } from "./retailerProvider.js";
import { useDistributors } from "../distributors/DistributorProvider.js";
import { useDistributorNurseries } from "../distributors/DistributorNurseryProvider.js";
import { useNurseryFlowers } from "../nurseries/NurseryFlowersProvider.js";
import { useNurseries } from "../nurseries/NurseryDataProvider.js";
import { useFlowers } from "../flowers/FlowerDataProvider.js";

const contentTarget = document.querySelector(".retailersContainer")

export const RetailersList = () => {

    const retailersCollection = useRetailers()
    const distributorsCollection = useDistributors()
    const flowersCollection = useFlowers()
    const nurseryCollection = useNurseries()
    const nurseryFlowersArray = useNurseryFlowers()
    const distributorNurseriesArray = useDistributorNurseries()

    retailersCollection.map(singleRetailer => {
        const foundDistributor = distributorsCollection.find(singleDistributor => singleDistributor.id === singleRetailer.distributorId)

        const filteredDistributorNurseries = distributorNurseriesArray.filter(singleObj => singleObj.distributorId === foundDistributor.id)

        const foundNurseries = filteredDistributorNurseries.map(singleDistNursery => {
            return nurseryCollection.find(singleNursery => singleNursery.id === singleDistNursery.nurseryId)
        })

        let filteredNurseryFlowers = foundNurseries.map(eachFoundNursery => {
            
          return nurseryFlowersArray.filter(singleNursFlowerRel => singleNursFlowerRel.nurseryId === eachFoundNursery.id)
        })
         
        filteredNurseryFlowers = filteredNurseryFlowers.flat()
        
        const foundFlowers = filteredNurseryFlowers.map(eachNursFlower => {
            return flowersCollection.find(singleFlower => singleFlower.id === eachNursFlower.flowerId)
        })
        

        contentTarget.innerHTML += Retailer(singleRetailer, foundDistributor, foundNurseries, foundFlowers)
    })

}






