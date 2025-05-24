import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orden } from './entities/orden.entity';
import { Cliente } from '../clientes/entities/cliente.entity';
import { Producto } from '../productos/entities/producto.entity';
import { OrdenesService } from './ordenes.service';
import { OrdenesController } from './ordenes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Orden, Cliente, Producto])],
  controllers: [OrdenesController],
  providers: [OrdenesService],
})
export class OrdenesModule {}
