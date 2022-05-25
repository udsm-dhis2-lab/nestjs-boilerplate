import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
jest.setTimeout(300000);

export let app: INestApplication;
export const server = async () => {
  if (!app) {
    const imports: any[] = [AppModule];
    app = (
      await Test.createTestingModule({
        imports,
      }).compile()
    ).createNestApplication();
    await app.init();
    return app;
  }
};

export const close = async () => {
  if (app) {
    await app.close();
  }
};
