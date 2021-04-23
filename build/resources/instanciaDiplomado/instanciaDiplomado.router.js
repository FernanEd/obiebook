"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var instanciaDiplomado_controllers_1 = __importDefault(require("./instanciaDiplomado.controllers"));
var router = express_1.default.Router();
router.route("/").get(instanciaDiplomado_controllers_1.default.getMany).post(instanciaDiplomado_controllers_1.default.createOne);
router
    .route("/:id")
    .get(instanciaDiplomado_controllers_1.default.getOne)
    .put(instanciaDiplomado_controllers_1.default.updateOne)
    .delete(instanciaDiplomado_controllers_1.default.deleteOne);
exports.default = router;
