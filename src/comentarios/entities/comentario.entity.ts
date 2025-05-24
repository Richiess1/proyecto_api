import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Producto } from 'src/productos/entities/producto.entity';

@Entity()
export class Comentario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  comentario: string;

  @Column()
  puntaje: number;

  @ManyToOne(() => Producto, { eager: true })
  producto: Producto;
}
