"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var instanciaCurso_controllers_1 = __importDefault(require("./instanciaCurso.controllers"));
var router = express_1.default.Router();
router.route("/").get(instanciaCurso_controllers_1.default.getMany).post(instanciaCurso_controllers_1.default.createOne);
router
    .route("/:id")
    .get(instanciaCurso_controllers_1.default.getOne)
    .put(instanciaCurso_controllers_1.default.updateOne)
    .delete(instanciaCurso_controllers_1.default.deleteOne);
exports.default = router;
