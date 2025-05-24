import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { Reserva } from './entities/reserva.entity';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { Cliente } from '../clientes/entities/cliente.entity';

@Injectable()
export class ReservasService {
  constructor(
    @InjectRepository(Reserva)
    private reservaRepo: Repository<Reserva>,
    @InjectRepository(Cliente)
    private clienteRepo: Repository<Cliente>,
  ) {}

  async create(dto: CreateReservaDto): Promise<Reserva> {
    const cliente = await this.clienteRepo.findOne({ where: { id: dto.clienteId } });
    if (!cliente) throw new NotFoundException('Cliente no encontrado');

    const inicio = new Date(dto.fechaInicio);
    const fin = new Date(dto.fechaFin);

    if (fin <= inicio) {
      throw new BadRequestException('La fecha de fin debe ser posterior a la de inicio');
    }

    const reservas = await this.reservaRepo.find({
      where: {
        cliente: { id: dto.clienteId },
        fechaInicio: Between(dto.fechaInicio, dto.fechaFin),
      },
    });

    if (reservas.length > 0) {
      throw new BadRequestException('El cliente ya tiene una reserva en ese rango de fechas');
    }

    const reserva = this.reservaRepo.create({
      cliente,
      fechaInicio: dto.fechaInicio,
      fechaFin: dto.fechaFin,
    });

    return this.reservaRepo.save(reserva);
  }

  findAll(): Promise<Reserva[]> {
    return this.reservaRepo.find();
  }
}
