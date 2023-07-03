import { Module } from '@nestjs/common';
import { ConceptoService } from './concepto.service';
import { ConceptoSchema } from './schema/concepto.schema';
import { CONCEPTO } from 'src/common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { ConceptoController } from './concepto.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: CONCEPTO.descripcion,
        useFactory: () => ConceptoSchema,
      },
    ]),
  ],
  controllers: [ConceptoController],
  providers: [ConceptoService],
})
export class ConceptoModule {}