import { Module } from '@nestjs/common';
import { MensajesWsService } from './mensajes-ws.service';
import { MensajesWsGateway } from './mensajes-ws.gateway';
import { ConceptoModule } from '../concepto/concepto.module';
//  'src/estudiante/estudiante.module';

@Module({
  providers: [MensajesWsGateway, MensajesWsService],
  imports:[ConceptoModule]
})
export class MensajesWsModule {}
