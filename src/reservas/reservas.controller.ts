import { Controller, Post, Body, Get } from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { Reserva } from './entities/reserva.entity';

@Controller('reservas')
export class ReservasController {
  constructor(private readonly reservasService: ReservasService) {}

  @Post()
  create(@Body() dto: CreateReservaDto): Promise<Reserva> {
    return this.reservasService.create(dto);
  }

  @Get()
  findAll(): Promise<Reserva[]> {
    return this.reservasService.findAll();
  }
}
