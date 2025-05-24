import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    ManyToMany,
    JoinTable,
    CreateDateColumn,
} from 'typeorm';

import { Cliente } from 'src/clientes/entities/cliente.entity';
import { Producto } from 'src/productos/entities/producto.entity';

@Entity()
export class Orden {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    fechaCreacion: Date;

    @Column('decimal')
    montoTotal: number;

    @ManyToOne(() => Cliente, { eager: true })
    cliente: Cliente;

    @ManyToMany(() => Producto, { eager: true })
    @JoinTable()
    productos: Producto[];
}
