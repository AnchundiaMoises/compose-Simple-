import { CreateConceptoDto } from './dto/create-concepto.dto';
import { UpdateConceptoDto } from './dto/update-concepto.dto';
import { Concepto } from './entities/concepto.entity';
export declare class ConceptoService {
    private concepto;
    create(createConceptoDto: CreateConceptoDto): Concepto;
    findAll(): Concepto[];
    findOne(id: number): Concepto;
    update(id: number, updateConceptoDto: UpdateConceptoDto): Concepto;
    remove(id: number): void;
}
