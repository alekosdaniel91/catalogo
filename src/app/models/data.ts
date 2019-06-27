export interface Data {
    descripcion: string,
    cantidadDisponible: number,
    imagen: string,
    miniatura: string,
    idProducto: number,
    categoria: string,
    precio: number,
}
export interface User {
    
    nombre?: string,
    apellido?: string,
    cedulaPdf?:string,
    direccion?: string,
    ciudad?: string,
    fecha?:any,
    id?:number,
}
