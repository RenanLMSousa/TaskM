import { Controller, Get, Patch } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

    constructor(private userService : UserService){}

    @Get()
    getMe(){

        return "GET ME";
    }

    @Patch()
    editUser(){
        
        return this.userService.editUser();
    }

}
