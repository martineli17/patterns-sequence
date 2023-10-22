import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TicketGrpcClient } from 'src/infra/integration/grpc/services/ticket-grpc.client';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TicketGrpc',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:3003',
          package: 'sequence_pattern',
          protoPath: 'src/infra/integration/grpc/protos/ticket.proto',
        },
      },
    ]),
  ],
  providers: [TicketGrpcClient],
  exports: [TicketGrpcClient],
})
export class TicketModule {}
