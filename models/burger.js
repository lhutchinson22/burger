//create the code that will call the ORM functions using burger specific input for the ORM.
const ORM = require("./orm")

class burgerJS extends connectionJS {

    selectAll()
    insertOne()
    updateOne()
    
    };
    
module.exports = burgerJS;