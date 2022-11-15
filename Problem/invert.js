function invert(obj) {
    // Returns a copy of the object where the keys have become the values and the values the keys.
    // Assume that all of the object's values will be unique and string serializable.
    // http://underscorejs.org/#invert

    let key = Object.keys(obj);
    let value = Object.values(obj);

    let result = [];

    for(let index = 0; index < key.length; index++){
        result[index] = [value[index],key[index]];
    }
    return result;
}

module.exports = invert;