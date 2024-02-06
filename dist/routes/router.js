"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pagos_controllers_1 = require("../controllers/pagos.controllers");
const router = (0, express_1.Router)();
router.get('/pagos', pagos_controllers_1.listarPagos);
router.post('/pagos', pagos_controllers_1.enviarPago);
router.delete('/pagos', pagos_controllers_1.resetearPagos);
exports.default = router;
