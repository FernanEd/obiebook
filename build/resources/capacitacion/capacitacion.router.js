"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var capacitacion_controllers_1 = __importDefault(require("./capacitacion.controllers"));
var router = express_1.default.Router();
router.route("/").get(capacitacion_controllers_1.default.getMany).post(capacitacion_controllers_1.default.createOne);
router
    .route("/:id")
    .get(capacitacion_controllers_1.default.getOne)
    .put(capacitacion_controllers_1.default.updateOne)
    .delete(capacitacion_controllers_1.default.deleteOne);
exports.default = router;
