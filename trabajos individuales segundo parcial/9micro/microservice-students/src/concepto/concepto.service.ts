import { ConceptoDTO } from './dto/concepto.dto';
import { HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CONCEPTO } from 'src/common/models/models';
import { IConcepto } from 'src/common/interfaces/concepto.interface';

@Injectable()
export class ConceptoService {
  constructor(@InjectModel(CONCEPTO.descripcion) private readonly model: Model<IConcepto>) {}

  
  async create(conceptoDTO: ConceptoDTO): Promise<IConcepto> {
    const newConcepto = new this.model(conceptoDTO);
    return await newConcepto.save();
  }

  async findAll(): Promise<IConcepto[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<IConcepto> {
    return await this.model.findById(id);
  }

  async update(id: string, conceptoDTO: ConceptoDTO): Promise<IConcepto> {
    return await this.model.findByIdAndUpdate(id, conceptoDTO , { new: true });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}