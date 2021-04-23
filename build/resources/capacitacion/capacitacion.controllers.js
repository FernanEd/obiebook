"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var capacitacion_model_1 = __importDefault(require("./capacitacion.model"));
var genericControllers_1 = __importDefault(require("../../utils/genericControllers"));
var controllers = genericControllers_1.default(capacitacion_model_1.default);
exports.default = controllers;
