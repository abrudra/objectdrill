function defaults(obj, defaultProps) {
    // Fill in undefined properties that match properties on the `defaultProps` parameter object.
    // Return `obj`.
    // http://underscorejs.org/#defaults

    let property = Object.keys(defaultProps);
    property.forEach(element => {
        if(obj[element] === undefined){
            obj[element] = defaultProps[element]
        }
    })
    return obj;
}

module.exports = defaults;