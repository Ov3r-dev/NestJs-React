import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { FavoritosController } from './favoritos.controller';
import { Produto } from 'src/produtos/entities/produto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente, Produto])],
  controllers: [ClienteController, FavoritosController],
  providers: [ClienteService],
  exports: [TypeOrmModule, ClienteService],
})
export class ClienteModule {}
