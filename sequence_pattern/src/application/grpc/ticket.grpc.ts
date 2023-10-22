import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller, Inject, Injectable } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ITicketService } from 'src/domain/interfaces/services/iticket.service';
import { TicketGeneratedWay } from 'src/domain/types/ticket-generated-way.enum';
import { TicketService } from 'src/services/ticket.service';
import { TicketEmptyRequest, TicketResponse } from '../protos/iticket';

@Controller()
export class TicketGrpc {
  constructor(
    @Inject(TicketService) private readonly _ticketService: ITicketService,
  ) {}

  @GrpcMethod('TicketService', 'GetOneCode')
  async GetOneCode(
    _: TicketEmptyRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ): Promise<TicketResponse> {
    const response = {
      generatedWay: TicketGeneratedWay.AUTOMATIC,
    } as TicketResponse;

    response.code = await this._ticketService.getOneCodeAsync();

    if (!response.code) {
      const newTicket = await this._ticketService.generateOnDemandAsync(
        TicketGeneratedWay.ON_DEMAND,
      );
      response.code = newTicket.code;
      response.generatedWay = newTicket.generatedWay;
    }

    return response;
  }
}
