import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { ITicketService } from 'src/domain/interfaces/services/iticket.service';
import { ITicketGrpcClient } from '../interfaces/iticket-grpc.client';
import { TicketDto } from 'src/domain/dto/ticket/ticket.dto';

@Injectable()
export class TicketGrpcClient implements ITicketService {
  private readonly _ticketIntegration: ITicketGrpcClient;

  constructor(@Inject('TicketGrpc') client: ClientGrpc) {
    this._ticketIntegration =
      client.getService<ITicketGrpcClient>('TicketService');
  }

  async getOneCodeAsync(): Promise<TicketDto> {
    const response = await firstValueFrom(
      this._ticketIntegration.GetOneCode({}),
    );
    return { ...response };
  }
}
