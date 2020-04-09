let flowers = []

export const getFlowers = () => {
    return fetch("http://localhost:8090/flowers")
    .then(res => res.json())
    .then(parsedFlowers => flowers = parsedFlowers)
}


export const useFlowers = () => flowers.slice()