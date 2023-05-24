import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

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
