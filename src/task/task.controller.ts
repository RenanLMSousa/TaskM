import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { CreateTaskDto } from './dto';
import { debug } from 'console';


@UseGuards(AuthGuard('jwt-strat'))
@Controller('tasks')
export class TaskController {

    constructor(private taskService:TaskService){}

    @Get()
    async getTasks(@Req() req : Request){

        return this.taskService.getTasks(req.user["id"]);
    }

    @Post()
    async createTask(@Req() req: Request,@Body() dto:CreateTaskDto ){
        return this.taskService.createTask(req.user["id"] , dto);
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
