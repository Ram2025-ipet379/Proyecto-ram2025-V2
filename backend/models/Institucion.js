const mongoose = require('mongoose');

const InstitucionSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  
  codigo: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    uppercase: true
  },
  
  direccion: {
    calle: String,
    ciudad: String,
    provincia: String,
    codigoPostal: String
  },
  
  contacto: {
    telefono: String,
    email: {
      type: String,
      lowercase: true,
      trim: true
    },
    sitioWeb: String
  },
  
  tipoInstitucion: {
    type: String,
    enum: ['tecnica_secundaria', 'universidad', 'instituto', 'colegio'],
    default: 'tecnica_secundaria'
  },
  
  especialidades: [{
    nombre: {
      type: String,
      required: true,
      trim: true
    },
    codigo: {
      type: String,
      required: true,
      trim: true
    },
    duracion: {
      type: Number,
      required: true,
      min: 1,
      max: 7
    },
    activa: {
      type: Boolean,
      default: true
    }
  }],
  
  cicloAcademicoActual: {
    año: {
      type: Number,
      required: true,
      default: () => new Date().getFullYear()
    },
    periodo: {
      type: String,
      enum: ['primer_cuatrimestre', 'segundo_cuatrimestre', 'anual'],
      default: 'anual'
    },
    fechaInicio: Date,
    fechaFin: Date
  },
  
  configuracion: {
    maxEstudiantesPorCurso: {
      type: Number,
      default: 35
    },
    habilitarAutoevaluaciones: {
      type: Boolean,
      default: true
    },
    requiereAprobacionDocente: {
      type: Boolean,
      default: false
    }
  },
  
  activa: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  collection: 'instituciones'
});

// Índices
InstitucionSchema.index({ codigo: 1 });
InstitucionSchema.index({ 'cicloAcademicoActual.año': 1 });

module.exports = mongoose.model('Institucion', InstitucionSchema);