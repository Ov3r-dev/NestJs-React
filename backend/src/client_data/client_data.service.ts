import { Injectable } from '@nestjs/common';
import { CreateClientDatumDto } from './dto/create-client_datum.dto';
import { UpdateClientDatumDto } from './dto/update-client_datum.dto';

@Injectable()
export class ClientDataService {
  create(createClientDatumDto: CreateClientDatumDto) {
    return 'This action adds a new clientDatum';
  }

  findAll() {
    return `This action returns all clientData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clientDatum`;
  }

  update(id: number, updateClientDatumDto: UpdateClientDatumDto) {
    return `This action updates a #${id} clientDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} clientDatum`;
  }
}
