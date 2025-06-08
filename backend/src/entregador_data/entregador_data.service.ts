import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Entregador } from './entities/entregador_datum.entity';
import { CreateEntregadorDto } from './dto/create-entregador_datum.dto';
import { UpdateEntregadorDto } from './dto/update-entregador_datum.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EntregadorService {
  constructor(
    @InjectRepository(Entregador)
    private entregadorRepository: Repository<Entregador>,
  ) {}

  findAll() {
    return this.entregadorRepository.find();
  }

  async findOne(id: number) {
    const entregador = await this.entregadorRepository.findOne({ where: { id } });
    if (!entregador) throw new NotFoundException('Entregador não encontrado');
    return entregador;
  }

  async update(id: number, dto: UpdateEntregadorDto) {
    await this.findOne(id);
    await this.entregadorRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.entregadorRepository.delete(id);
  }

  async create(dto: CreateEntregadorDto) {
  const hashedPassword = await bcrypt.hash(dto.senha, 10);
  const entregador = this.entregadorRepository.create({
    ...dto,
    senha: hashedPassword,
    role: 'ENTREGADOR',
  });
  return this.entregadorRepository.save(entregador);
}
}
