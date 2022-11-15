function values(obj) {
    // Return all of the values of the object's own properties.
    // Ignore functions
    // http://underscorejs.org/#values

    let valuesArray = [];
    for(let values in obj){
        valuesArray.push(obj[values])

    }
    return valuesArray;

}

module.exports = values;