"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConceptoService = void 0;
const common_1 = require("@nestjs/common");
const concepto_entity_1 = require("./entities/concepto.entity");
let ConceptoService = class ConceptoService {
    constructor() {
        this.concepto = [
            { id: 1, descripcion: '1' },
            { id: 2, descripcion: '2' },
        ];
    }
    create(createConceptoDto) {
        const concepto = new concepto_entity_1.Concepto();
        concepto.id = Math.max(...this.concepto.map(elemento => elemento.id), 0) + 1;
        concepto.descripcion = createConceptoDto.descripcion;
        this.concepto.push(concepto);
        return concepto;
    }
    findAll() {
        return this.concepto;
    }
    findOne(id) {
        const concepto = this.concepto.find(concepto => concepto.id === id);
        if (!concepto)
            throw new common_1.NotFoundException(`ID ${id} not found`);
        return concepto;
    }
    update(id, updateConceptoDto) {
        const { descripcion } = updateConceptoDto;
        const concepto = this.findOne(id);
        if (descripcion)
            concepto.descripcion = descripcion;
        this.concepto = this.concepto.map(elemento => {
            if (elemento.id === id)
                return concepto;
            return elemento;
        });
        return concepto;
    }
    remove(id) {
        this.findOne(id);
        this.concepto = this.concepto.filter(elemento => elemento.id !== id);
    }
};
ConceptoService = __decorate([
    (0, common_1.Injectable)()
], ConceptoService);
exports.ConceptoService = ConceptoService;
//# sourceMappingURL=concepto.service.js.map