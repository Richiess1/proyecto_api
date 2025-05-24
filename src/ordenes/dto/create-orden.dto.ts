import { IsArray, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateOrdenDto {
  @IsNumber()
  clienteId: number;

  @IsArray()
  @IsNotEmpty({ message: 'La orden debe contener al menos un producto' })
  productoIds: number[];
}
