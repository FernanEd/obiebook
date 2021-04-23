"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema, model = mongoose_1.default.model;
var CertificacionSchema = new Schema({
    certificacion: { type: String, required: true },
    diplomados: [{ type: Schema.Types.ObjectId, ref: "Diplomado" }]
});
exports.default = model("Certificacion", CertificacionSchema);
