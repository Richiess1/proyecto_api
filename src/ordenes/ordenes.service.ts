import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orden } from './entities/orden.entity';
import { CreateOrdenDto } from './dto/create-orden.dto';
import { Cliente } from '../clientes/entities/cliente.entity';
import { Producto } from '../productos/entities/producto.entity';

@Injectable()
export class OrdenesService {
  constructor(
    @InjectRepository(Orden)
    private ordenRepository: Repository<Orden>,
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
  ) { }

  async create(dto: CreateOrdenDto): Promise<Orden> {
    const cliente = await this.clienteRepository.findOne({ where: { id: dto.clienteId } });
    if (!cliente) throw new NotFoundException('Cliente no encontrado');

    if (!dto.productoIds || dto.productoIds.length === 0) {
      throw new BadRequestException('Debe incluir al menos un producto');
    }

    const productos = await this.productoRepository.findByIds(dto.productoIds);

    if (productos.length === 0) {
      throw new NotFoundException('Productos no encontrados');
    }

    const montoTotal = productos.reduce((total, prod) => total + Number(prod.precio), 0);

    const orden = this.ordenRepository.create({
      cliente,
      productos,
      montoTotal,
    });

    return this.ordenRepository.save(orden);
  }

  findAll(): Promise<Orden[]> {
    return this.ordenRepository.find();
  }
}
