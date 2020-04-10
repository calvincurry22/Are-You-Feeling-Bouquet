
export const Retailer = (retailerObj, distributorObj, nurseryArray, flowerArray) => {
    return `
        <section class="retailer__Card">
            <h3>Retailer Name: ${retailerObj.name}</h3>
            <p>City: ${retailerObj.city}, ${retailerObj.state}</p>
            <p>Address:${retailerObj.address}</p>
            <p>Distributor: ${distributorObj.name}</p>
            <ul>
                <lh>Source Nurseries</lh>
                ${nurseryArray.map(singleNursery => {
                    console.log(nurseryArray)
                    return `<li>${singleNursery.name}</li>`
                }).join("")}
            </ul>
            <ul>
                <lh>Available Flowers</lh>
                ${flowerArray.map(singleFlower => {
                    console.log(flowerArray)
                    return `<li>${singleFlower.commonName}</li>`
                }).join("")}
            </ul>
        </section>
            `
}