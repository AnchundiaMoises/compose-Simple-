import { ConceptoService } from './concepto.service';
import { CreateConceptoDto } from './dto/create-concepto.dto';
import { UpdateConceptoDto } from './dto/update-concepto.dto';
import { Concepto } from './entities/concepto.entity';
export declare class ConceptoController {
    private readonly ConceptoService;
    constructor(ConceptoService: ConceptoService);
    create(createEstudianteDto: CreateConceptoDto): Concepto;
    findAll(): Concepto[];
    findOne(id: number): Concepto;
    update(id: string, updateEstudianteDto: UpdateConceptoDto): Concepto;
    remove(id: string): void;
}
