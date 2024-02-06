import { Router, Request, Response, response } from 'express';
import {enviarPago, listarPagos, resetearPagos} from '../controllers/pagos.controllers';

const router = Router();

router.get('/pagos', listarPagos);
router.post('/pagos', enviarPago);
router.delete('/pagos', resetearPagos);



export default router;