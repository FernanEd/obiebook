"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var instanciaDiplomado_model_1 = __importDefault(require("./instanciaDiplomado.model"));
var genericControllers_1 = __importDefault(require("../../utils/genericControllers"));
var controllers = genericControllers_1.default(instanciaDiplomado_model_1.default, "diplomado inscritos aprobados reprobados tutor");
exports.default = controllers;
