"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var registroAcreditacion_controllers_1 = __importDefault(require("./registroAcreditacion.controllers"));
var router = express_1.default.Router();
router.route("/").get(registroAcreditacion_controllers_1.default.getMany).post(registroAcreditacion_controllers_1.default.createOne);
router
    .route("/:id")
    .get(registroAcreditacion_controllers_1.default.getOne)
    .put(registroAcreditacion_controllers_1.default.updateOne)
    .delete(registroAcreditacion_controllers_1.default.deleteOne);
exports.default = router;
