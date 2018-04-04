// was taken from https://medium.com/techtrument/enumeration-objects-in-javascript-ec06a83f39f2
export default class Enumeration {
    constructor(obj) {
        for (const key in obj) {
            this[key] = obj[key]
        }
        return Object.freeze(this)
    }
}