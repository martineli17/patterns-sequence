export type AddEventDto = {
  position: string | null | undefined;
  date: Date | null | undefined;
  location: AddEventLocationDto;
};

export type AddEventLocationDto = {
  cep: string | null | undefined;
  number: number | null | undefined;
  extension?: string | null | undefined;
};
