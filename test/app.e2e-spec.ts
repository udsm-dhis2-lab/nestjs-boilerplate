import * as request from 'supertest';
import { app, server, close } from './setup-server';

describe('AppController (e2e)', () => {
  beforeEach(async () => {
    await server();
  });
  afterAll(async () => {
    await close();
  });
  test('Get App Status (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect(({ body }) => {
        expect(body.status).toBe('Ok');
      });
  });
});
