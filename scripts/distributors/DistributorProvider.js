let distributor = []


export const getDistributors = () => {
    return fetch("http://localhost:3000/distributors")
    .then(res => res.json())
    .then(parsedDistributor => distributor = parsedDistributor)
}


export const useDistributors = () => distributor.slice()