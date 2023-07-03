import * as mongoose from 'mongoose';

export const ConceptoSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    descripcion: { type: String, required: true }
  },
  { timestamps: true },
);


ConceptoSchema.index({ id: 1 }, { unique: true });