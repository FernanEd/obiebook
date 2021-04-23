"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var Schema = mongoose_1.default.Schema, model = mongoose_1.default.model;
var UsuarioSchema = new Schema({
    nombre: {
        primero: { type: String, required: true },
        segundo: { type: String },
    },
    apellido: {
        paterno: { type: String, required: true },
        materno: { type: String, required: true },
    },
    fecha: {
        nacimiento: { type: Date, required: true },
        ingreso: { type: Date, required: true },
    },
    roles: [{ type: String, enum: ["docente", "coach", "admin"] }],
    areas: {
        docente: [{ type: Schema.Types.ObjectId, ref: "Area" }],
        coach: [{ type: Schema.Types.ObjectId, ref: "Area" }],
    },
    matricula: { type: String, required: true },
    clave: { type: String, private: true, default: "" },
});
UsuarioSchema.pre("save", function (next) {
    var _this = this;
    bcryptjs_1.default.hash(String(this.matricula), 8, function (err, hash) {
        if (err) {
            return next(err);
        }
        _this.clave = hash;
        next();
    });
});
UsuarioSchema.methods.checkPassword = function (password) {
    var passwordHash = String(this.clave);
    return new Promise(function (resolve, reject) {
        bcryptjs_1.default.compare(password, passwordHash, function (err, same) {
            if (err) {
                return reject(err);
            }
            resolve(same);
        });
    });
};
exports.default = model("Usuario", UsuarioSchema);
