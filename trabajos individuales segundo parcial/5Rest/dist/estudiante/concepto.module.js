"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConceptoModule = void 0;
const common_1 = require("@nestjs/common");
const concepto_service_1 = require("./concepto.service");
const concepto_controller_1 = require("./concepto.controller");
let ConceptoModule = class ConceptoModule {
};
ConceptoModule = __decorate([
    (0, common_1.Module)({
        controllers: [concepto_controller_1.ConceptoController],
        providers: [concepto_service_1.ConceptoService]
    })
], ConceptoModule);
exports.ConceptoModule = ConceptoModule;
//# sourceMappingURL=concepto.module.js.map