"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema, model = mongoose_1.default.model;
var RegistroAcreditacionSchema = new Schema({
    tipo: {
        type: String,
        enum: ["curso", "capacitacion", "diplomado", "certificacion"],
    },
    acreditacion: {
        curso: { type: Schema.Types.ObjectId, ref: "Curso" },
        capacitacion: { type: Schema.Types.ObjectId, ref: "Capacitacion" },
        diplomado: { type: Schema.Types.ObjectId, ref: "Diplomado" },
        certificacion: { type: Schema.Types.ObjectId, ref: "Certificacion" },
    },
    fecha: { type: Date },
    jornada: { type: Schema.Types.ObjectId, ref: "Jornada", required: true },
    acreditor: { type: Schema.Types.ObjectId, ref: "Usuario", required: true },
    remitentes: {
        coach: { type: Schema.Types.ObjectId, ref: "Usuario", required: true },
        admin: { type: Schema.Types.ObjectId, ref: "Usuario", required: true },
    },
    documento: { type: Date, required: true },
    estado: { type: String, enum: ["pendiente", "prospecto", "activo"] },
});
exports.default = model("RegistroAcreditacion", RegistroAcreditacionSchema);
