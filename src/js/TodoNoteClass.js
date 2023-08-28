import { getTime } from './addForm';
import { v4 as uuidv4 } from 'uuid';


export default class Note {
    constructor(title, info, priority, time){
        this.title = title;
        this.info = info;
        this.priority = priority;
        this.time = time;
        this._id = uuidv4()
    }

    get id(){
        return this._id;
    }

}