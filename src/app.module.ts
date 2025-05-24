import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosModule } from './productos/productos.module';
import { ClientesModule } from './clientes/clientes.module';
import { OrdenesModule } from './ordenes/ordenes.module';
import { ReservasModule } from './reservas/reservas.module';

@Module({
  imports: [ 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', 
      port: 5432, 
      username: 'postgres', 
      password: 'suser', 
      database: 'proyecto_api', 
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, 
    }),
    ProductosModule,
    ClientesModule,
    OrdenesModule,
    ReservasModule,
  ],
})
export class AppModule {}
