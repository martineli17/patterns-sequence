import { TicketGeneratedWay } from '../types/ticket-generated-way.enum';

export class Ticket {
  private readonly _generatedWay: TicketGeneratedWay;
  public _code: string;
  private _available: boolean;

  constructor(generateWay: TicketGeneratedWay, available: boolean) {
    this._generatedWay = generateWay;
    this._available = available;
  }

  public get generatedWay(): TicketGeneratedWay {
    return this._generatedWay;
  }

  public get code(): string {
    return this._code;
  }

  public get available(): boolean {
    return this._available;
  }

  generateCode(randomName: string): void {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const day = currentDate.getDay();
    const seconds = currentDate.getSeconds();
    const milliseconds = currentDate.getMilliseconds();

    this._code = `${randomName}-${year}${month}${day}${seconds}${milliseconds}`;
  }
}
