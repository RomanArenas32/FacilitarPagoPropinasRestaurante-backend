"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrarPago = exports.resetearPagos = exports.enviarPago = exports.listarPagos = void 0;
const pagos_1 = __importDefault(require("../models/pagos"));
const listarPagos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //listar los pagos que se van haciendo
    try {
        const pagos = yield pagos_1.default.find();
        res.status(200).json({
            msg: "Lista de pagos",
            pagos
        });
    }
    catch (error) {
        res.status(500).json({
            error: "Error al listar los pagos"
        });
    }
});
exports.listarPagos = listarPagos;
const enviarPago = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //agregar un pago
    try {
        const { metodo, monto } = req.body;
        const pago = new pagos_1.default({ metodo, monto });
        yield pago.save(); //guarda el pago nuevo en la base de datos
        res.status(200).json({
            msg: "Pago enviado correctamente",
            metodo,
            monto,
        });
    }
    catch (error) {
        res.status(500).json({
            error: "Error al agregar el pago"
        });
    }
});
exports.enviarPago = enviarPago;
const resetearPagos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield pagos_1.default.deleteMany({}); // Borra todos los documentos de la colección Pagos
        res.status(200).json({
            msg: "Pagos resetados correctamente"
        });
    }
    catch (error) {
        console.error("Error al resetear los pagos:", error);
        res.status(500).json({
            error: "Error al resetear los pagos"
        });
    }
});
exports.resetearPagos = resetearPagos;
const borrarPago = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const pago = yield pagos_1.default.findByIdAndDelete(id);
        res.status(200).json({
            msg: "Pago eliminado correctamente",
            pago
        });
    }
    catch (error) {
        res.json({
            msg: "No se pudo eliminar el pago. Contacte al administrador"
        });
    }
});
exports.borrarPago = borrarPago;
