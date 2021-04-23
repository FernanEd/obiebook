"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var sample_controllers_1 = __importDefault(require("./sample.controllers"));
var router = express_1.default.Router();
router.route("/").get(sample_controllers_1.default.getMany).post(sample_controllers_1.default.createOne);
router
    .route("/:id")
    .get(sample_controllers_1.default.getOne)
    .put(sample_controllers_1.default.updateOne)
    .delete(sample_controllers_1.default.deleteOne);
exports.default = router;
