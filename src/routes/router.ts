import { Router, Request, Response, response } from 'express';
const { check } = require('express-validator');
import { enviarPago, listarPagos, resetearPagos, borrarPago } from '../controllers/pagos.controllers';

const router = Router();

router.get('/pagos', listarPagos);
router.post('/pagos', [check('metodo', 'El metodo de pago es obligatorio').not().isEmpty(), check('monto', 'Debe introducir un monto').not().isEmpty()], enviarPago);
router.delete('/pagos', resetearPagos);
router.delete('/pagos/:id', [
    check('id', 'No es un ID válido').isMongoId(),
], borrarPago);


export default router;