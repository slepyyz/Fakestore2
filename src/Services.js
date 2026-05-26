export default class Services {
    constructor() {}

    getAdat(vegpont, callback, hibaCallback) {
        fetch(vegpont)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                callback(data);
            })
            .catch((error) => hibaCallback(error));
    }
}
