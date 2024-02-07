import { Request, Response } from "express";
import Pago from "../models/pagos";

export const listarPagos = async (req: Request, res: Response) => {
    //listar los pagos que se van haciendo
    try {
        const pagos = await Pago.find()
        res.status(200).json({
            msg: "Lista de pagos",
            pagos
        });
    } catch (error) {

        res.status(500).json({
            error: "Error al listar los pagos"
        });
    }
};

export const enviarPago = async (req: Request, res: Response) => {
    //agregar un pago
    try {
        const { metodo, monto } = req.body
        const pago = new Pago({ metodo, monto });
        await pago.save();   //guarda el pago nuevo en la base de datos

        res.status(200).json({
            msg: "Pago enviado correctamente",
            metodo,
            monto,
        });
    } catch (error) {
        res.status(500).json({
            error: "Error al agregar el pago"
        });
    }
};


export const resetearPagos = async (req: Request, res: Response) => {
    try {
        await Pago.deleteMany({});  // Borra todos los documentos de la colección Pagos
        res.status(200).json({
            msg: "Pagos resetados correctamente"
        });
    } catch (error) {
        console.error("Error al resetear los pagos:", error);
        res.status(500).json({
            error: "Error al resetear los pagos"
        });
    }
};
export const borrarPago = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const pago = await Pago.findByIdAndDelete(id);
        res.status(200).json({
            msg: "Pago eliminado correctamente",
            pago
        });
    } catch (error) {
        res.json({
            msg: "No se pudo eliminar el pago. Contacte al administrador"
        })
    }
}