import { IsArray, IsIn, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateConceptoDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    descripcion:string;

}
