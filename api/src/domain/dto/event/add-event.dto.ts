export type AddEventDto = {
  position: string;
  date: Date;
  location: AddEventLocationDto;
};

export type AddEventLocationDto = {
  cep: string;
  number: number;
  extension?: string;
};
