import { Request, Response } from "express";

import Tarea from "../models/Tarea";
import { arrTareas } from "../db";

export const getTareas = (req: Request, res: Response) => {
    if (arrTareas.length === 0) {
        return res.json({
            msj: 'No hay tareas por hacer'
        });
    }

    const tareasSinTerminar = arrTareas.filter(tarea => tarea.isCompleted === false);
    if (tareasSinTerminar.length === 0) {
        return res.json({
            msj: 'No hay tareas por hacer'
        });
    }

    res.json(tareasSinTerminar);
}

export const getTareasCompletadas = (req: Request, res: Response) => {

    const tareasSinTerminar = arrTareas.filter(tarea => tarea.isCompleted !== false);
    if (tareasSinTerminar.length === 0) {
        return res.json({
            msj: 'No hay tareas completadas'
        });
    }

    res.json(tareasSinTerminar);
}

export const postTarea = (req: Request, res: Response) => {
    const {title} = req.body;

    if (!title) {
        return res.status(400).json({
            msj: 'Debe enviar el titulo de la tarea'
        });
    }

    const tarea = new Tarea(title);

    arrTareas.push(tarea);
    
    res.status(201).json({tarea});
}

export const terminarTarea = (req: Request, res: Response) => {
    
    const {id} = req.params;

    const findTarea = arrTareas.find(tarea => tarea.id === id);
    if (!findTarea) {
        return res.status(400).json({
            msj: `No existe tarea con id ${id}`
        });
    }

    arrTareas.forEach(tarea => {
        if (tarea.id === id) {
            tarea.isCompleted = true;
            return res.json(tarea);
        }
    });
}