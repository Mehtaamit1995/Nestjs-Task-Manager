import { IsNotEmpty, IS_ALPHA, IS_NOT_EMPTY } from "class-validator";

export class CreateTaskDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;
}