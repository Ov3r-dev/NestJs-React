import { Injectable } from '@nestjs/common';
import { CreateFornecedorDatumDto } from './dto/create-fornecedor_datum.dto';
import { UpdateFornecedorDatumDto } from './dto/update-fornecedor_datum.dto';

@Injectable()
export class FornecedorDataService {
  create(createFornecedorDatumDto: CreateFornecedorDatumDto) {
    return 'This action adds a new fornecedorDatum';
  }

  findAll() {
    return `This action returns all fornecedorData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fornecedorDatum`;
  }

  update(id: number, updateFornecedorDatumDto: UpdateFornecedorDatumDto) {
    return `This action updates a #${id} fornecedorDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} fornecedorDatum`;
  }
}
