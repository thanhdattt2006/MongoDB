import { Test, TestingModule } from '@nestjs/testing';
import { DemoController } from './controllers/app.controller';

describe('DemoController', () => {
  let demoController: DemoController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DemoController],
    }).compile();

    demoController = app.get<DemoController>(DemoController);
  });

  describe('root', () => {
    it('should return "Hello World"', () => {
      // FIX: Adjusted the test to check the index() method of DemoController instead of getHello()
      expect(demoController.index()).toBe('Hello World');
    });
  });
});
