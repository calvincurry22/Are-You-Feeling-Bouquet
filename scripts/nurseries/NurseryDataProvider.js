let nurseries = []

export const getNurseries = () => {
    return fetch("http://localhost:8090/nurseries")
    .then(res => res.json())
    .then(parsedNurseries => {
        nurseries = parsedNurseries
    })
}



export const useNurseries = () => {
    console.log(nurseries)
    return nurseries.slice()
}