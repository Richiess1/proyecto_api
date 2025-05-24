import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comentario } from './entities/comentario.entity';
import { Repository } from 'typeorm';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { Producto } from '../productos/entities/producto.entity';

@Injectable()
export class ComentariosService {
  constructor(
    @InjectRepository(Comentario)
    private comentarioRepo: Repository<Comentario>,
    @InjectRepository(Producto)
    private productoRepo: Repository<Producto>,
  ) {}

  async create(dto: CreateComentarioDto): Promise<Comentario> {
    const producto = await this.productoRepo.findOne({ where: { id: dto.productoId } });
    if (!producto) {
      throw new NotFoundException('Producto no encontrado');
    }

    const comentario = this.comentarioRepo.create({
      comentario: dto.comentario,
      puntaje: dto.puntaje,
      producto,
    });

    return this.comentarioRepo.save(comentario);
  }

  findAll(): Promise<Comentario[]> {
    return this.comentarioRepo.find();
  }
}
