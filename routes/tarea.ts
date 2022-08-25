import { Router } from 'express';


import { getTareas, postTarea, terminarTarea, getTareasCompletadas } from '../controller/tareas';

const router = Router();

router.get('/', getTareas);
router.get('/completo', getTareasCompletadas);
router.post('/', postTarea);
router.put('/:id', terminarTarea);

export default router;