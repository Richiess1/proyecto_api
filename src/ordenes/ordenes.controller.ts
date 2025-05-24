import { Controller, Post, Body, Get } from '@nestjs/common';
import { OrdenesService } from './ordenes.service';
import { CreateOrdenDto } from './dto/create-orden.dto';
import { Orden } from './entities/orden.entity';

@Controller('ordenes')
export class OrdenesController {
  constructor(private readonly ordenesService: OrdenesService) {}

  @Post()
  create(@Body() dto: CreateOrdenDto): Promise<Orden> {
    return this.ordenesService.create(dto);
  }

  @Get()
  findAll(): Promise<Orden[]> {
    return this.ordenesService.findAll();
  }
}
