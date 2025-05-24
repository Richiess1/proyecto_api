import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty, IsPositive, IsInt } from 'class-validator';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty({ message: 'El nombre no puede estar vacío' })
  nombre: string;

  @Column('decimal')
  @IsPositive({ message: 'El precio debe ser mayor a 0' })
  precio: number;

  @Column()
  @IsInt({ message: 'El stock debe ser un número entero' })
  @IsPositive({ message: 'El stock debe ser positivo' })
  stock: number;
}
