const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
    titulo: String,
    etiquetas: Array,
    oferente: {
        type: Schema.Types.ObjectId,
        ref: 'oferente'
    },
    costo: Float64Array,
    metodo: String,
    descripcion: String,
    imagen: String,
    calificacion: Float32Array,
    timestamp: Date
});

module.exports = mongoose.model('Service', ServiceSchema);