import { v4 } from 'uuid';

class Tarea {
    public id: string;
    private title: string;
    public isCompleted: boolean;

    constructor(title: string) {
        this.id = v4();
        this.title = title;
        this.isCompleted = false;
    }
}

export default Tarea;