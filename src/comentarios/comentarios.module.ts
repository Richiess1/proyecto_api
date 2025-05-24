import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comentario } from './entities/comentario.entity';
import { Producto } from '../productos/entities/producto.entity';
import { ComentariosService } from './comentarios.service';
import { ComentariosController } from './comentarios.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Comentario, Producto])],
  controllers: [ComentariosController],
  providers: [ComentariosService],
})
export class ComentariosModule {}
