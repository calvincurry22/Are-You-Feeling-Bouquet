
export const Flower = (flowerObj) => {
    return `
        <section class="flower__Card">
            <h3>Flower Name: ${flowerObj.commonName}</h3>
            <p>Color: ${flowerObj.color}</p>
        </section>
    `
} 