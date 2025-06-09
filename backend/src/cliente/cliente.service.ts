import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteSenhaDto } from './dto/update-cliente.dto';
import { Produto } from 'src/produtos/entities/produto.entity';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,

    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
  ) {}

  async create(dto: CreateClienteDto) {
    const cliente = this.clienteRepository.create(dto);
    return this.clienteRepository.save(cliente);
  }

  findAll() {
    return this.clienteRepository.find();
  }

  async findOne(id: number) {
    const cliente = await this.clienteRepository.findOne({ where: { id } });
    if (!cliente) throw new NotFoundException('Cliente não encontrado');
    return cliente;
  }

  async updateSenha(id: number, dto: UpdateClienteSenhaDto) {
    const cliente = await this.findOne(id);
    cliente.senha = dto.senha;
    return this.clienteRepository.save(cliente);
  }

  async adicionarFavorito(clienteId: number, produtoId: number) {
    const cliente = await this.clienteRepository.findOne({
      where: { id: clienteId },
      relations: ['favoritos'],
    });

    const produto = await this.produtoRepository.findOneBy({ id: produtoId });

    if (!cliente || !produto) {
      throw new NotFoundException('Cliente ou produto não encontrado');
    }

    const jaExiste = cliente.favoritos.find((p) => p.id === produtoId);
    if (jaExiste) {
      throw new BadRequestException('Produto já favoritado');
    }

    cliente.favoritos.push(produto);
    await this.clienteRepository.save(cliente);
    return { message: 'Produto adicionado aos favoritos' };
  }

  async removerFavorito(clienteId: number, produtoId: number) {
    const cliente = await this.clienteRepository.findOne({
      where: { id: clienteId },
      relations: ['favoritos'],
    });

    if (!cliente) throw new NotFoundException('Cliente não encontrado');

    cliente.favoritos = cliente.favoritos.filter((p) => p.id !== produtoId);
    await this.clienteRepository.save(cliente);
    return { message: 'Produto removido dos favoritos' };
  }

  async listarFavoritos(clienteId: number) {
    const cliente = await this.clienteRepository.findOne({
      where: { id: clienteId },
      relations: ['favoritos'],
    });

    if (!cliente) throw new NotFoundException('Cliente não encontrado');

    return cliente.favoritos;
  }
}
