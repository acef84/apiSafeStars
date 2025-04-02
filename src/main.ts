import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();  // Adicione esta linha para habilitar o CORS
  await app.listen(3000);
}
bootstrap();
