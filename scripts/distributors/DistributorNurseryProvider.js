let distributorNurseries = []


export const getDistributorNurseries = () => {
    return fetch("http://localhost:8090/distributorNurseries")
    .then(res => res.json())
    .then(parsedDistNurseries => distributorNurseries = parsedDistNurseries)
}


export const useDistributorNurseries = () => distributorNurseries.slice()