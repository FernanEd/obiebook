"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var jornada_controllers_1 = __importDefault(require("./jornada.controllers"));
var router = express_1.default.Router();
router.route("/:idjornada/agregarcurso").post(jornada_controllers_1.default.addOneCurso);
router.route("/:idjornada/agregardiplomado").post(jornada_controllers_1.default.addOneDiplomado);
router.route("/").get(jornada_controllers_1.default.getMany).post(jornada_controllers_1.default.createOne);
router
    .route("/:id")
    .get(jornada_controllers_1.default.getOne)
    .put(jornada_controllers_1.default.updateOne)
    .delete(jornada_controllers_1.default.deleteOne);
exports.default = router;
