import { Test, TestingModule } from '@nestjs/testing';
import { FornecedorDataService } from './fornecedor_data.service';

describe('FornecedorDataService', () => {
  let service: FornecedorDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FornecedorDataService],
    }).compile();

    service = module.get<FornecedorDataService>(FornecedorDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
