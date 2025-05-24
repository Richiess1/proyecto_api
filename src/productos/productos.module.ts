import { Module } from '@nestjs/common';
import { ProductosService } from './productos/productos.service';
import { ProductosController } from './productos.controller';

@Module({
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
