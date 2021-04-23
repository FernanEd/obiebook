"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var usuario_controllers_1 = __importDefault(require("./usuario.controllers"));
var router = express_1.default.Router();
router.route("/").get(usuario_controllers_1.default.getMany).post(usuario_controllers_1.default.createOne);
router
    .route("/:id")
    .get(usuario_controllers_1.default.getOne)
    .put(usuario_controllers_1.default.updateOne)
    .delete(usuario_controllers_1.default.deleteOne);
exports.default = router;
