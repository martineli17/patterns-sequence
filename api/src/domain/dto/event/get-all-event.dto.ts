export type GetAllEventDto = {
  id: string;
  position: string;
  code: string;
  generatedWay: number;
  date: Date;
  location: GetAllEventLocationDto;
};

export type GetAllEventLocationDto = {
  cep: string;
  number: number;
  extension?: string;
};
