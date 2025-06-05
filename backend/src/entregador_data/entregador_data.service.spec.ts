import { Test, TestingModule } from '@nestjs/testing';
import { EntregadorDataService } from './entregador_data.service';

describe('EntregadorDataService', () => {
  let service: EntregadorDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntregadorDataService],
    }).compile();

    service = module.get<EntregadorDataService>(EntregadorDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
