let retailers = []


export const getRetailers = () => {
    return fetch("http://localhost:8090/retailers")
    .then(res => res.json())
    .then(parsedRetailers => retailers = parsedRetailers)
}


export const useRetailers = () => retailers.slice()

