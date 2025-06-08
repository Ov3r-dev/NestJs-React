import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { EntregadorService } from './entregador_data.service';
import { CreateEntregadorDto } from './dto/create-entregador_datum.dto';
import { UpdateEntregadorDto } from './dto/update-entregador_datum.dto';

@Controller('entregadores')
export class EntregadorController {
  constructor(private readonly service: EntregadorService) {}

  @Post()
  create(@Body() dto: CreateEntregadorDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdateEntregadorDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
