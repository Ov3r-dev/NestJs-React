import { Test, TestingModule } from '@nestjs/testing';
import { EntregadorService } from './entregador_data.service';

describe('EntregadorDataService', () => {
  let service: EntregadorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntregadorService],
    }).compile();

    service = module.get<EntregadorService>(EntregadorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
