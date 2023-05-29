import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateConceptoDto } from './dto/create-concepto.dto';
import { UpdateConceptoDto } from './dto/update-concepto.dto';
import { Concepto } from './entities/concepto.entity';

@Injectable()
export class ConceptoService {

  private concepto: Concepto[]=[
    {id:1, descripcion:'1' },
    {id:2, descripcion:'2' },
  ]

  create(createConceptoDto: CreateConceptoDto) {
    const concepto = new Concepto();
    concepto.id=  Math.max( ... this.concepto.map(elemento => elemento.id),0 )+1 ;
    concepto.descripcion= createConceptoDto.descripcion;
    this.concepto.push(concepto);
    return concepto;
  }

  findAll() : Concepto[] {
    return this.concepto;
  }

  findOne(id: number) {
    //const concepto =  this.concepto.find(this.concepto => this.concepto.id===id);
    const concepto =  this.concepto.find(concepto => concepto.id===id);
    if (!concepto) throw new NotFoundException(`ID ${id} not found`)
    return concepto;
  }

  update(id: number, updateConceptoDto: UpdateConceptoDto) {
    const { descripcion  } = updateConceptoDto;
    const concepto = this.findOne(id);
    if (descripcion) concepto.descripcion= descripcion;
    

    this.concepto =  this.concepto.map( elemento=> {
      if (elemento.id===id) return concepto;
      return elemento;
    } )

    return concepto;

  }

  remove(id: number) {
    this.findOne(id);
    this.concepto =  this.concepto.filter(elemento=> elemento.id!== id);
  }
}
