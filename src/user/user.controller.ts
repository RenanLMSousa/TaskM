import { Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@UseGuards(AuthGuard('jwt-strat'))
@Controller('users')
export class UserController {

    constructor(private userService : UserService){}


    @Get('me')
    getMe(@Req() req: Request){
        console.log(req.user);
        return req.user;
    }

    @Patch()
    editUser(){
        
        return this.userService.editUser();
    }

}
