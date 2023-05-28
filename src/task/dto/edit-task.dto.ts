import { IsDate, IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class EditTaskDto{

    @IsString()
    @IsOptional()
    title: string

    @IsString()
    @IsOptional()
    description?: string

    @IsString()
    @IsOptional()
    dueDate?: string


}