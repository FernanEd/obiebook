"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var curso_controllers_1 = __importDefault(require("./curso.controllers"));
var router = express_1.default.Router();
router.route("/").get(curso_controllers_1.default.getMany).post(curso_controllers_1.default.createOne);
router
    .route("/:id")
    .get(curso_controllers_1.default.getOne)
    .put(curso_controllers_1.default.updateOne)
    .delete(curso_controllers_1.default.deleteOne);
exports.default = router;
