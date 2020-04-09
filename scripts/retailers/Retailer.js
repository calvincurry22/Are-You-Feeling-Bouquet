
export const Retailer = (retailerObj, distributorObj) => {
    return `
        <section class="retailer__Card">
            <h3>Retailer Name: ${retailerObj.name}</h3>
            <p>City: ${retailerObj.city}, ${retailerObj.state}</p>
            <p>Address:${retailerObj.address}</p>
            <p>Distributor: ${distributorObj.name}</p>
        </section>
            `
}