import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Cliente } from '../../clientes/entities/cliente.entity';

@Entity()
export class Reserva {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  fechaInicio: string;

  @Column({ type: 'date' })
  fechaFin: string;

  @ManyToOne(() => Cliente, { eager: true })
  cliente: Cliente;
}
