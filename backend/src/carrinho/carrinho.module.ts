import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrinho } from './entities/carrinho.entity';
import { CarrinhoItem } from './entities/carrinho-item.entity';
import { CarrinhoService } from './carrinho.service';
import { CarrinhoController } from './carrinho.controller';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Produto } from 'src/produtos/entities/produto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Carrinho, CarrinhoItem, Cliente, Produto])],
  controllers: [CarrinhoController],
  providers: [CarrinhoService],
})
export class CarrinhoModule {}