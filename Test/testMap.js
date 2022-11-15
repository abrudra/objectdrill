const resultMap = require('../data');
const keys = require('../Problem/keys');
const result = require('../Problem/mapObject');

function cb(obj, element ){
    if(element === ''){
        return obj[element]
    }else{
        return obj[element]
    }
}

console.log(result(resultMap.testObject(),cb))