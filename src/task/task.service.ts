import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto';

@Injectable()
export class TaskService {

    constructor(private prismaService : PrismaService){}

    async getTasks(userId : number){

        return this.prismaService.tasks.findMany(
            {
                where:{
                    id : userId
                }

            }
        );
    }

    async createTask(userId : number,dto : CreateTaskDto){
        
        const task = await this.prismaService.tasks.create({
            data: {

                userId,
                ...dto,
            }

        })
        return task;
    }

    async deleteTaskById(userId : number, taskId : number){
        const task = await this.prismaService.tasks.findUnique({
            where:{
                id: taskId,
                       }

        });

        if(!task || task.userId != userId){

            throw new ForbiddenException(
                'Access to resources denied',
              );
        
        }
        await this.prismaService.tasks.delete(
            {
                where:{
                    id: taskId,
                }
            }
        );
        return "TASK DELETED";
    }

    async getTaskById(userId : number, taskId : number){
        return this.prismaService.tasks.findFirst(
            {
                where:{
                    id : taskId,
                    userId
                }

            }
        );
    }

    async editTaskById(){
        return "EDIT TASK BY ID";
    }

}
