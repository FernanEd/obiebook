"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var area_controllers_1 = __importDefault(require("./area.controllers"));
var router = express_1.default.Router();
router.route("/").get(area_controllers_1.default.getMany).post(area_controllers_1.default.createOne);
router
    .route("/:id")
    .get(area_controllers_1.default.getOne)
    .put(area_controllers_1.default.updateOne)
    .delete(area_controllers_1.default.deleteOne);
exports.default = router;
