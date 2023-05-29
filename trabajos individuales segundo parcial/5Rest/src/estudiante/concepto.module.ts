import { Module } from '@nestjs/common';
import { ConceptoService } from './concepto.service';
import { ConceptoController } from './concepto.controller';

@Module({
  controllers: [ConceptoController],
  providers: [ConceptoService]
})
export class ConceptoModule {}
