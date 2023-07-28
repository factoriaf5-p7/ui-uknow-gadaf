/*Permitir que solamente el usuario registrado pueda crear un curso */
declare namespace Express {
    interface Request {
        userId?: string;
    }
}
/*Permitir que solamente el usuario registrado pueda crear un curso */
