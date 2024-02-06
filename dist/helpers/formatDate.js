"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
const formatDate = (fecha) => {
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false };
    const formato = new Intl.DateTimeFormat('es-ES', opciones);
    return formato.format(fecha);
};
exports.formatDate = formatDate;
