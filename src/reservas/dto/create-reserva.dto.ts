import { IsDateString, IsNumber } from 'class-validator';

export class CreateReservaDto {
  @IsNumber()
  clienteId: number;

  @IsDateString()
  fechaInicio: string;

  @IsDateString()
  fechaFin: string;
}
