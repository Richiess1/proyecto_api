import { IsInt, IsString, MaxLength, Min, Max } from 'class-validator';

export class CreateComentarioDto {
  @IsString()
  @MaxLength(200)
  comentario: string;

  @IsInt()
  @Min(1)
  @Max(5)
  puntaje: number;

  @IsInt()
  productoId: number;
}
