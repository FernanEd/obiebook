"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema, model = mongoose_1.default.model;
var CapacitacionSchema = new Schema({
    capacitacion: { type: String, required: true },
    cursos: [{ type: Schema.Types.ObjectId, ref: "Curso" }]
});
exports.default = model("Capacitacion", CapacitacionSchema);
