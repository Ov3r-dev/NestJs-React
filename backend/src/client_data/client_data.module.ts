import { Module } from '@nestjs/common';
import { ClientDataService } from './client_data.service';
import { ClientDataController } from './client_data.controller';

@Module({
  controllers: [ClientDataController],
  providers: [ClientDataService],
})
export class ClientDataModule {}
