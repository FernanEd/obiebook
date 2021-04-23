"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema, model = mongoose_1.default.model;
var JornadaSchema = new Schema({
    tipo: { type: String, enum: ["curso", "diplomado"] },
    fecha: {
        inicio: { type: Date, required: true },
        fin: { type: Date, required: true },
    },
    contenido: {
        cursos: [{ type: Schema.Types.ObjectId, ref: "InstanciaCurso" }],
        diplomados: [{ type: Schema.Types.ObjectId, ref: "InstanciaDiplomado" }],
    },
});
exports.default = model("Jornada", JornadaSchema);
