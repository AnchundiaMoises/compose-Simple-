import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateConceptoDto {
    @IsString()
    @IsNotEmpty()
    descripcion:string;

    
}
