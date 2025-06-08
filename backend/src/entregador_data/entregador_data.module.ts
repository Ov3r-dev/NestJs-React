import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entregador } from './entities/entregador_datum.entity';
import { EntregadorService } from './entregador_data.service';
import { EntregadorController } from './entregador_data.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Entregador])],
  controllers: [EntregadorController],
  providers: [EntregadorService],
})
export class EntregadorModule {}
