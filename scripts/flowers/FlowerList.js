import { Flower } from "./Flower.js";
import { useFlowers } from "./FlowerDataProvider.js";

const contentTarget = document.querySelector(".flowersContainer")


export const FlowerList = () => {
    const flowerCollection = useFlowers()
    
    flowerCollection.map(singleFlower => {
        contentTarget.innerHTML += Flower(singleFlower)
    })
}