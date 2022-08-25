import { Router } from 'express';
import { getTareas, postTarea, deleteTarea } from '../controller/tareas';
import { applyServerHardening } from '../middlewares/cargarTareas';

const router = Router();

router.get('/', getTareas);
router.post('/', postTarea);
router.delete('/', deleteTarea);

export default router;