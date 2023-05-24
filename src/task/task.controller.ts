import { Controller, Delete, Get, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';


@UseGuards(AuthGuard('jwt-strat'))
@Controller('tasks')
export class TaskController {

    constructor(private taskService:TaskService){}

    @Get()
    async getTasks(@Req() req : Request){

        return this.taskService.getTasks(req.user["id"]);
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
