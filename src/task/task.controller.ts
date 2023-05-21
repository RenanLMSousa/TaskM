import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {

    constructor(private taskService:TaskService){}

    @Get()
    async getTask(){

        return this.taskService.getTask();
    }

    @Post()
    async createTask(){
        return this.taskService.createTask();
    }
    @Delete()
    async deleteTaskById(){
        return this.taskService.deleteTaskById();
    }

    @Get()
    async getTaskById(){
        return this.taskService.getTaskById();
    }

    @Patch()
    async editTaskById(){
        return this.taskService.editTaskById();
    }

}
