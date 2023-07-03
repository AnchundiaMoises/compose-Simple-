import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { ConceptoController } from './concepto.controller';

@Module({
  imports: [ProxyModule],
  controllers: [ConceptoController],
})
export class ConceptoModule {}