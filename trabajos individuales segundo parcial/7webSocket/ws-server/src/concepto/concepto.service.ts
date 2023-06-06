import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateConceptoDto } from './dto/create-concepto.dto';
import { UpdateConceptoDto } from './dto/update-concepto.dto';
import { Concepto } from './entities/concepto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ConceptoService {

  private readonly logger = new Logger('ConceptoService');

  constructor( 
    @InjectRepository(Concepto) 
    private readonly conceptoRepository: Repository<Concepto>,

    ){}

  
  async create(createConceptoDto: CreateConceptoDto) {
    try {
      const concepto =  this.conceptoRepository.create(createConceptoDto);
      await this.conceptoRepository.save(concepto);
      return concepto;
    } catch (error) {
      console.log(error)
      if (error.code==='23505')
        throw new BadRequestException(error.detail)
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado')
    }
    
  }

  findAll() {
    return this.conceptoRepository.find({});
  }

  async findOne(id: string) {
    const concepto= await  this.conceptoRepository.findOneBy ({ id });
    if (!concepto)
      throw new NotFoundException(`Concepto ${id} no encontrado`);
    return concepto;

  }

  async update(id: string, updateConceptoDto: UpdateConceptoDto) {
    const concepto = await this.conceptoRepository.preload({
      id: id,
      ...updateConceptoDto
    });
    if (!concepto) throw new NotFoundException(`Concepto ${id} no encontrado`)

    try {
      await  this.conceptoRepository.save(concepto)
      return concepto;
      
    } catch (error) {
      console.log(error)
    }

  }

  async remove(id: string) {
    const concepto = await this.findOne(id);
    await this.conceptoRepository.remove(concepto);

  }
  prueba():String[]{
    return ['uno','dos','tres'];
  }
}
