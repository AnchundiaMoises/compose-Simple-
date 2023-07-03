import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsPositive } from 'class-validator';

@InputType()
export class CreateEstudianteInput {

  @Field(()=>String )
  @IsNotEmpty()
  descripcion:string;

  @Field(()=>Boolean )
  @IsOptional()
  estado:boolean;

  
}
