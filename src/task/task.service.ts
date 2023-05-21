import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {


    async getTask(){

        return "GET TASK";
    }

    async createTask(){
        return "CREATE TASK";
    }

    async deleteTaskById(){
        return "DELETE TASK BY ID";
    }

    async getTaskById(){
        return "GET TASK BY ID";
    }

    async editTaskById(){
        return "EDIT TASK BY ID";
    }

}
