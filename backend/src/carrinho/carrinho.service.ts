import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Carrinho } from './entities/carrinho.entity';
import { CarrinhoItem } from './entities/carrinho-item.entity';
import { Repository } from 'typeorm';
import { Cliente } from '../cliente/entities/cliente.entity';
import { Produto } from '../produtos/entities/produto.entity';

@Injectable()
export class CarrinhoService {
  
  async findAll() {
  return this.carrinhoRepository.find({
    relations: ['cliente', 'itens', 'itens.produto'],
  });
}

  constructor(
    @InjectRepository(Carrinho)
    private carrinhoRepository: Repository<Carrinho>,

    @InjectRepository(CarrinhoItem)
    private carrinhoItemRepository: Repository<CarrinhoItem>,

    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,

    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
  ) {}

  async adicionarItem(clienteId: number, produtoId: number, quantidade: number) {
    const cliente = await this.clienteRepository.findOne({ where: { id: clienteId } });
    const produto = await this.produtoRepository.findOne({ where: { id: produtoId } });

    if (!cliente || !produto) {
      throw new NotFoundException('Cliente ou Produto não encontrado');
    }

    let carrinho = await this.carrinhoRepository.findOne({
      where: { cliente: { id: clienteId }, finalizado: false },
      relations: ['itens', 'itens.produto'],
    });

    if (!carrinho) {
      carrinho = this.carrinhoRepository.create({ cliente, itens: [] });
    }

    const itemExistente = carrinho.itens.find((item) => item.produto.id === produtoId);

    if (itemExistente) {
      itemExistente.quantidade += quantidade;
    } else {
      const novoItem = this.carrinhoItemRepository.create({
        produto,
        quantidade,
      });
      carrinho.itens.push(novoItem);
    }

    return this.carrinhoRepository.save(carrinho);
  }

  async verCarrinho(clienteId: number) {
    const carrinho = await this.carrinhoRepository.findOne({
      where: { cliente: { id: clienteId }, finalizado: false },
      relations: ['itens', 'itens.produto'],
    });

    if (!carrinho) {
      throw new NotFoundException('Carrinho não encontrado');
    }

    return carrinho;
  }

  async removerCarrinho(id: number) {
    const carrinho = await this.carrinhoRepository.findOne({ where: { id } });
    if (!carrinho) throw new NotFoundException('Carrinho não encontrado');

    return this.carrinhoRepository.remove(carrinho);
  }
  
  async finalizarCompra(clienteId: number) {
  const carrinho = await this.carrinhoRepository.findOne({
    where: {
      cliente: { id: clienteId },
      finalizado: false,
    },
    relations: ['itens'],
  });

  if (!carrinho) {
    throw new NotFoundException('Carrinho não encontrado ou já finalizado');
  }

  if (!carrinho.itens || carrinho.itens.length === 0) {
    throw new NotFoundException('Carrinho está vazio');
  }

  carrinho.finalizado = true;
  return this.carrinhoRepository.save(carrinho);
}
  

}
