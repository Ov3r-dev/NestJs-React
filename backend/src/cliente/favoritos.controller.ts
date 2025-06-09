import { Controller, Post, Delete, Get, Param, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, TypeORMError } from 'typeorm';
import { Cliente } from './entities/cliente.entity';
import { Produto } from 'src/produtos/entities/produto.entity';


@Controller('clientes/:clienteId/favoritos')
export class FavoritosController {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepo: Repository<Cliente>,

    @InjectRepository(Produto)
    private produtoRepo: Repository<Produto>,
  ) {}

  @Post(':produtoId')
  async adicionarFavorito(@Param('clienteId') clienteId: number, @Param('produtoId') produtoId: number) {
    const cliente = await this.clienteRepo.findOne({ where: { id: clienteId }, relations: ['favoritos'] });
    const produto = await this.produtoRepo.findOneBy({ id: produtoId });

    if (!cliente || !produto) throw new NotFoundException('Cliente ou Produto não encontrado');

    cliente.favoritos.push(produto);
    await this.clienteRepo.save(cliente);

    return { message: 'Produto adicionado aos favoritos!' };
  }

  @Delete(':produtoId')
  async removerFavorito(@Param('clienteId') clienteId: number, @Param('produtoId') produtoId: number) {
    const cliente = await this.clienteRepo.findOne({ where: { id: clienteId }, relations: ['favoritos'] });
    if (!cliente) throw new NotFoundException('Cliente não encontrado');

    cliente.favoritos = cliente.favoritos.filter(p => p.id !== +produtoId);
    await this.clienteRepo.save(cliente);

    return { message: 'Produto removido dos favoritos!' };
  }

  @Get()
  async listarFavoritos(@Param('clienteId') clienteId: number) {
    const cliente = await this.clienteRepo.findOne({ where: { id: clienteId }, relations: ['favoritos'] });
    if (!cliente) throw new NotFoundException('Cliente não encontrado');

    return cliente.favoritos;
  }
}
