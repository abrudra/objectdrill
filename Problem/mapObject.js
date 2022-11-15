const keys = require("./keys");

function mapObject(obj, cb) {
    // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
    // http://underscorejs.org/#mapObject

    Object.keys(obj).map(element => {
        obj[element] = cb(obj,element)
    });
    return obj;
}

module.exports = mapObject;