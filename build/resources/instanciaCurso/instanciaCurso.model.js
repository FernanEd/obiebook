"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema, model = mongoose_1.default.model;
var InstanciaCursoSchema = new Schema({
    curso: { type: Schema.Types.ObjectId, ref: "Curso", required: true },
    tutor: { type: Schema.Types.ObjectId, ref: "Usuario" },
    fecha: {
        inicio: { type: Date, required: true },
        fin: { type: Date, required: true },
    },
    inscritos: [{ type: Schema.Types.ObjectId, ref: "Usuario" }],
    aprobados: [{ type: Schema.Types.ObjectId, ref: "Usuario" }],
    reprobados: [{ type: Schema.Types.ObjectId, ref: "Usuario" }],
});
exports.default = model("InstanciaCurso", InstanciaCursoSchema);
