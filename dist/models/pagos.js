"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const pagoSchema = new mongoose_1.Schema({
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
pagoSchema.methods.toJSON = function () {
    const _a = this.toObject(), { __v, _id } = _a, pago = __rest(_a, ["__v", "_id"]);
    pago.uid = _id;
    return pago;
};
exports.default = (0, mongoose_1.model)("Pagos", pagoSchema);
