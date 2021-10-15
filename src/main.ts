import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json } from 'express';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: false
  });

  app.setGlobalPrefix('/api');
  app.use(json({ limit: '100mb' }));  

  const port = process.env.PORT || 3000;
  await app.listen(port);

  console.log(`Listening on port: ${port}`);
  console.log(`Explore api on http://localhost:${port}/api`);
}
bootstrap();
