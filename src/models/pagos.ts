import { Schema, model, Document } from 'mongoose';

//MODELO PARA LOS PAGOS

interface Pago extends Document {
    metodo: string;
    monto: number;
    fecha: Date;
}

const pagoSchema = new Schema<Pago>({
    metodo: {
        type: String,
        required: [true, "El metodo de pago es obligatorio"]
    },
    monto: {
        type: Number,
        required: [true, "El monto es obligatorio"],
    },
    fecha: {
        type: Date,
        default: new Date()
    }
});

pagoSchema.methods.toJSON = function (): any {
    const { __v, _id, ...pago } = this.toObject();

    pago.uid = _id;

    return pago;
};

export default model<Pago>("Pagos", pagoSchema);