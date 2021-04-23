"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var certificacion_controllers_1 = __importDefault(require("./certificacion.controllers"));
var router = express_1.default.Router();
router.route("/").get(certificacion_controllers_1.default.getMany).post(certificacion_controllers_1.default.createOne);
router
    .route("/:id")
    .get(certificacion_controllers_1.default.getOne)
    .put(certificacion_controllers_1.default.updateOne)
    .delete(certificacion_controllers_1.default.deleteOne);
exports.default = router;
