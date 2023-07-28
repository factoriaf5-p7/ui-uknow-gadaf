/*Permitir que solamente el usuario registrado pueda crear un curso */
import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const secretKey = 'SECRET';

interface DecodedToken extends JwtPayload {
    userId: string;
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        const decodedToken = decoded as DecodedToken;
        req['user'] = decodedToken.userId;
        next();
    });
};

export default authMiddleware;
/*Permitir que solamente el usuario registrado pueda crear un curso */

