import Usuario from "../resources/usuario/usuario.model";
import { Handler } from "express";
interface Usuario {
    _id: string;
}
export declare const newToken: (usuario: Usuario) => string;
export declare const verifyToken: (token: string) => Promise<unknown>;
export declare const signin: Handler;
export declare const protect: Handler;
export declare const verify: Handler;
export {};
