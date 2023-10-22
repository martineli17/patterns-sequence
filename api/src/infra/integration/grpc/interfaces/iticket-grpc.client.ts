import { Observable } from 'rxjs';

export interface ITicketGrpcClient {
  GetOneCode(request: TicketEmptyRequest): Observable<TicketResponse>;
}

export interface TicketResponse {
  code: string;
  generatedWay: number;
}

export interface TicketEmptyRequest {}
