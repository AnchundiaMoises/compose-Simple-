import { Injectable } from '@nestjs/common';
import {Socket} from 'socket.io'
import { Concepto } from '../concepto/entities/concepto.entity'
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ConceptoService } from 'src/concepto/concepto.service';

interface ConnectedClients {
    [id:string]: {
       socket: Socket,
       concepto: Concepto
    }
}

@Injectable()
export class MensajesWsService {
    private connectedClients: ConnectedClients={}

    constructor( @InjectRepository(Concepto)
     private readonly conceptoRepository: Repository<Concepto>,
     private readonly conceptoService: ConceptoService
      ){}

    async registerClient(client:Socket, name: string){
        console.log(this.conceptoService.prueba());
        const concepto =await  this.conceptoRepository.findOneBy({ descripcion : name });
        if (!concepto) throw new Error('Concepto no encontrado');
        if (!concepto.estado) throw new Error('No activo');

        
        this.connectedClients[client.id]= {socket:client, concepto: concepto};
    }
    removeClient(clientId:string){
        delete this.connectedClients[clientId];
    }
    getConnectedClients():string[]{
        // return Object.keys(this.connectedClients).length;
        // console.log(this.connectedClients)
         return Object.keys(this.connectedClients);
    }
    getStudentFullName(id:string){
        return this.connectedClients[id].concepto.descripcion;
    }
}
