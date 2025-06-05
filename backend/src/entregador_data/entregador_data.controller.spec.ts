import { Test, TestingModule } from '@nestjs/testing';
import { EntregadorDataController } from './entregador_data.controller';
import { EntregadorDataService } from './entregador_data.service';

describe('EntregadorDataController', () => {
  let controller: EntregadorDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntregadorDataController],
      providers: [EntregadorDataService],
    }).compile();

    controller = module.get<EntregadorDataController>(EntregadorDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
