import { Test, TestingModule } from '@nestjs/testing';
import { ClientDataService } from './client_data.service';

describe('ClientDataService', () => {
  let service: ClientDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientDataService],
    }).compile();

    service = module.get<ClientDataService>(ClientDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
