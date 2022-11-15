const {testObject} = require('../data');
// const data = require('../data')
function keys(obj) {
    // Retrieve all the names of the object's properties.
    // Return the keys as strings in an array.
    // Based on http://underscorejs.org/#keys
    
    let KeyName = [];
   for(let keys in obj){
    KeyName.push(keys)
   }
   return KeyName;
}


module.exports = keys;