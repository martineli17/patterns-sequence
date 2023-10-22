import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      url: 'localhost:3003',
      package: 'sequence_pattern',
      protoPath: 'src/application/protos/ticket.proto',
    },
  });
  await app.startAllMicroservices();
  await app.listen(3002);
}
bootstrap();
