import { IsDate, IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateTaskDto{

    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsOptional()
    description?: string

    @IsString()
    @IsOptional()
    dueDate?: string


}