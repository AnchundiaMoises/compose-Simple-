import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Concepto {
    @PrimaryGeneratedColumn('uuid')
    id:string;
    
    @Column('varchar',{unique:true})
    descripcion:string;

    @Column('boolean',{default:true})
    estado:boolean;
}

