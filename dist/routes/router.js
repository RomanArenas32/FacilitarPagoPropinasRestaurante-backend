"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { check } = require('express-validator');
const pagos_controllers_1 = require("../controllers/pagos.controllers");
const router = (0, express_1.Router)();
router.get('/pagos', pagos_controllers_1.listarPagos);
router.post('/pagos', [check('metodo', 'El metodo de pago es obligatorio').not().isEmpty(), check('monto', 'Debe introducir un monto').not().isEmpty()], pagos_controllers_1.enviarPago);
router.delete('/pagos', pagos_controllers_1.resetearPagos);
router.delete('/pagos/:id', [
    check('id', 'No es un ID válido').isMongoId(),
], pagos_controllers_1.borrarPago);
exports.default = router;
