let nurseryFlowers = []


export const getNurseryFlowers = () => {
    return fetch("http://localhost:8090/nurseryFlowers")
    .then(res => res.json())
    .then(parsedNursFlowers => nurseryFlowers = parsedNursFlowers)
}


export const useNurseryFlowers = () => nurseryFlowers.slice()