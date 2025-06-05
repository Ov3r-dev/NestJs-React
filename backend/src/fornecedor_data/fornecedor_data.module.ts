import { Module } from '@nestjs/common';
import { FornecedorDataService } from './fornecedor_data.service';
import { FornecedorDataController } from './fornecedor_data.controller';

@Module({
  controllers: [FornecedorDataController],
  providers: [FornecedorDataService],
})
export class FornecedorDataModule {}
