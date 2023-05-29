import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConceptoModule } from './estudiante/concepto.module';

@Module({
  imports: [ConceptoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
