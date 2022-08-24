import { Request, Response } from "express";

export const getTareas = (req: Request, res: Response) => {
    res.json({
        msj: 'get'
    });
}

export const postTarea = (req: Request, res: Response) => {
    res.json({
        msj: 'post'
    });
}

export const deleteTarea = (req: Request, res: Response) => {
    res.json({
        msj: 'delete'
    });
}