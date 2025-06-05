import { Test, TestingModule } from '@nestjs/testing';
import { FornecedorDataController } from './fornecedor_data.controller';
import { FornecedorDataService } from './fornecedor_data.service';

describe('FornecedorDataController', () => {
  let controller: FornecedorDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FornecedorDataController],
      providers: [FornecedorDataService],
    }).compile();

    controller = module.get<FornecedorDataController>(FornecedorDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
