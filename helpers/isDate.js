const moment = require('moment')

const isDate = ( value, rest ) => {

    if( !value ){
        return false; 
    }

    const fecha = moment( value);
    return fecha.isValid() ? true : false;

}

module.exports = {
    isDate,
}