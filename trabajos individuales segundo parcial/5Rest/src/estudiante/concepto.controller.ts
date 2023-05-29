import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ConceptoService } from './concepto.service';
import { CreateConceptoDto } from './dto/create-concepto.dto';
import { UpdateConceptoDto } from './dto/update-concepto.dto';
import { Concepto } from './entities/concepto.entity';

@Controller('estudiante')
export class ConceptoController {
  constructor(private readonly ConceptoService: ConceptoService) {}

  @Post()
  create(@Body() createEstudianteDto: CreateConceptoDto) {
    return this.ConceptoService.create(createEstudianteDto);
  }

  @Get()
  findAll() : Concepto[] {
    return this.ConceptoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.ConceptoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstudianteDto: UpdateConceptoDto) {
    return this.ConceptoService.update(+id, updateEstudianteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ConceptoService.remove(+id);
  }
}
