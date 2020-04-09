
export const Flower = (flowerObj) => {
    return `
        <section class="flowerCard">
            <h4>Flower Name: ${flowerObj.commonName}</h4>
            <p>Color: ${flowerObj.color}</p>
        </section>
    `
} 