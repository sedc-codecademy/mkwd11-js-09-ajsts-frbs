import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Movie library docs.')
    .setDescription('Movies Description')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);

  // localhost:3000/api-docs
  SwaggerModule.setup('api-docs', app, document);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
