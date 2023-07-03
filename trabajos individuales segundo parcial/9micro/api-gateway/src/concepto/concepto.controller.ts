import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ConceptoMSG } from './.././common/constants';
import { Observable } from 'rxjs';
import { ConceptoDTO } from './dto/concepto.dto';
import { ClientProxySuperFlights } from './../common/proxy/client-proxy';
import { IConcepto } from 'src/common/interfaces/concepto.interface';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('concepto')
// @UseGuards(JwtAuthGuard)
@Controller('api/v2/concepto')
export class ConceptoController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxyConcepto = this.clientProxy.clientProxyConcepto();

  @Post()
  create(@Body() conceptoDTO: ConceptoDTO): Observable<IConcepto> {
    return this._clientProxyConcepto.send(ConceptoMSG.CREATE, conceptoDTO);
  }

  @Get()
  findAll(): Observable<IConcepto[]> {
    return this._clientProxyConcepto.send(ConceptoMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IConcepto> {
    return this._clientProxyConcepto.send(ConceptoMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() conceptoDTO: ConceptoDTO): Observable<IConcepto> {
    return this._clientProxyConcepto.send(ConceptoMSG.UPDATE, { id, conceptoDTO });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyConcepto.send(ConceptoMSG.DELETE, id);
  }
}