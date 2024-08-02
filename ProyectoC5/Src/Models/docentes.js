const mongoose = require('mongoose');
const schema = mongoose.Schema;

const docentes = new schema({
    PrimerNombre: {type:String, unique: false, require},
    SegundoNombre: {type:String, unique: false, require},
    PrimerApellido: {type:String, unique: false, require},
    SegundoApellido: {type:String, unique: false, require},
    Especialidad: {type:String, unique: false, require}
});

module.exports = mongoose.model("docentes", docentes);

