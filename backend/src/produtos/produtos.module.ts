import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './entities/produto.entity';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { AuthModule } from '../auth/auth.module';
import { Categoria } from 'src/categorias/entities/categoria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Produto, Categoria]), AuthModule],
  providers: [ProdutosService],
  controllers: [ProdutosController],
})
export class ProdutosModule {}
