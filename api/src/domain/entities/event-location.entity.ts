export class EventLocation {
  readonly eventId: string;
  readonly cep: string;
  readonly number: number;
  readonly extension: string | null;

  constructor(
    eventId: string,
    cep: string,
    number: number,
    extension: string | null = null,
  ) {
    this.eventId = eventId;
    this.cep = cep.trim();
    this.extension = extension?.trim();
    this.number = number;
  }
}
