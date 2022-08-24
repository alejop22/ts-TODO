import { v4 } from 'uuid';

class Tarea {
    private id: string;
    private title: string;
    private isCompleted: boolean;

    constructor(title: string) {
        this.id = v4();
        this.title = title;
        this.isCompleted = false;
    }
}

export default Tarea;