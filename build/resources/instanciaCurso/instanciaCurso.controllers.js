"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var instanciaCurso_model_1 = __importDefault(require("./instanciaCurso.model"));
var genericControllers_1 = __importDefault(require("../../utils/genericControllers"));
var controllers = genericControllers_1.default(instanciaCurso_model_1.default, "curso inscritos aprobados reprobados tutor");
exports.default = controllers;
