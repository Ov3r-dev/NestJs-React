import { Injectable } from '@nestjs/common';
import { CreateEntregadorDatumDto } from './dto/create-entregador_datum.dto';
import { UpdateEntregadorDatumDto } from './dto/update-entregador_datum.dto';

@Injectable()
export class EntregadorDataService {
  create(createEntregadorDatumDto: CreateEntregadorDatumDto) {
    return 'This action adds a new entregadorDatum';
  }

  findAll() {
    return `This action returns all entregadorData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} entregadorDatum`;
  }

  update(id: number, updateEntregadorDatumDto: UpdateEntregadorDatumDto) {
    return `This action updates a #${id} entregadorDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} entregadorDatum`;
  }
}
