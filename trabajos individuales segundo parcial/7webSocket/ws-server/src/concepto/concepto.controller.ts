import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, ParseUUIDPipe } from '@nestjs/common';
import { ConceptoService } from './concepto.service';
import { CreateConceptoDto } from './dto/create-concepto.dto';
import { UpdateConceptoDto } from './dto/update-concepto.dto';
import { Concepto } from './entities/concepto.entity';

@Controller('concepto')
export class ConceptoController {
  constructor(private readonly conceptoService: ConceptoService) {}

  @Post()
  create(@Body() CreateConceptoDto: CreateConceptoDto) {
    return this.conceptoService.create(CreateConceptoDto);
  }

  @Get()
  findAll()  {
    return this.conceptoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.conceptoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() UpdateConceptoDto: UpdateConceptoDto) {
    return this.conceptoService.update(id, UpdateConceptoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.conceptoService.remove(id);
  }
}
