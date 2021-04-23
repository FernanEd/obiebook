"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var diplomado_controllers_1 = __importDefault(require("./diplomado.controllers"));
var router = express_1.default.Router();
router.route("/").get(diplomado_controllers_1.default.getMany).post(diplomado_controllers_1.default.createOne);
router
    .route("/:id")
    .get(diplomado_controllers_1.default.getOne)
    .put(diplomado_controllers_1.default.updateOne)
    .delete(diplomado_controllers_1.default.deleteOne);
exports.default = router;
