
export const Retailer = (retailerObj) => {
    return `
        <section class="retailer__Card">
            <h3>Retailer Name: ${retailerObj.name}</h3>
            <p>City: ${retailerObj.city}, ${retailerObj.state}</p>
            <p>Address:${retailerObj.address}</p>
        </section>
            `
}