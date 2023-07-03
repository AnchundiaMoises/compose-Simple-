import { ConceptoService } from './concepto.service';
import { ConceptoDTO } from './dto/concepto.dto';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ConceptoMsg } from 'src/common/constants';

@Controller()
export class ConceptoController {
  constructor(private readonly conceptoService: ConceptoService) {}

  @MessagePattern(ConceptoMsg.CREATE)
  create(@Payload() conceptoDTO: ConceptoDTO) {
    return this.conceptoService.create(conceptoDTO);
  }

  @MessagePattern(ConceptoMsg.FIND_ALL)
  findAll() {
    return this.conceptoService.findAll();
  }

  @MessagePattern(ConceptoMsg.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.conceptoService.findOne(id);
  }
  @MessagePattern(ConceptoMsg.UPDATE)
  update(@Payload() payload: any) {
    return this.conceptoService.update(payload.id, payload.conceptoDTO);
  }

  @MessagePattern(ConceptoMsg.DELETE)
  delete(@Payload() id: string) {
    return this.conceptoService.delete(id);
  }
}