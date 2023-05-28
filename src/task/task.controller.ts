import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, Req, UseGuards } from '@nestjs/common';
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
    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(":id")
    async deleteTaskById(@Req() req: Request,@Param('id', ParseIntPipe) taskId: number ){
        return this.taskService.deleteTaskById(req.user["id"], taskId);
    }


    @Get(":id")
    async getTaskById(@Req() req: Request,@Param('id', ParseIntPipe) taskId: number ){
        return this.taskService.getTaskById(req.user["id"] , taskId);
    }

    @Patch()
    async editTaskById(){
        return this.taskService.editTaskById();
    }

}
