import { Controller, Post, Body, Get } from '@nestjs/common';
import { ComentariosService } from './comentarios.service';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { Comentario } from './entities/comentario.entity';

@Controller('comentarios')
export class ComentariosController {
  constructor(private readonly comentariosService: ComentariosService) {}

  @Post()
  create(@Body() dto: CreateComentarioDto): Promise<Comentario> {
    return this.comentariosService.create(dto);
  }

  @Get()
  findAll(): Promise<Comentario[]> {
    return this.comentariosService.findAll();
  }
}
