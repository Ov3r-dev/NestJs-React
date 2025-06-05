import { Test, TestingModule } from '@nestjs/testing';
import { ClientDataController } from './client_data.controller';
import { ClientDataService } from './client_data.service';

describe('ClientDataController', () => {
  let controller: ClientDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientDataController],
      providers: [ClientDataService],
    }).compile();

    controller = module.get<ClientDataController>(ClientDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
