import { Module } from '@nestjs/common';
import { EntregadorDataService } from './entregador_data.service';
import { EntregadorDataController } from './entregador_data.controller';

@Module({
  controllers: [EntregadorDataController],
  providers: [EntregadorDataService],
})
export class EntregadorDataModule {}
