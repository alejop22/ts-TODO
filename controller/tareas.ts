import { Request, Response } from "express";

import Tarea from "../models/Tarea";
import { arrTareas } from "../db";

export const getTareas = (req: Request, res: Response) => {
    res.json({
        msj: 'get'
    });
}

export const postTarea = (req: Request, res: Response) => {
    const {title} = req.body;

    const tarea = new Tarea(title);

    arrTareas.push(tarea);
    
    res.status(201).json({tarea});
}

export const deleteTarea = (req: Request, res: Response) => {
    res.json({
        msj: 'delete'
    });
}