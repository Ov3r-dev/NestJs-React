import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntregadorDataService } from './entregador_data.service';
import { CreateEntregadorDatumDto } from './dto/create-entregador_datum.dto';
import { UpdateEntregadorDatumDto } from './dto/update-entregador_datum.dto';

@Controller('entregador-data')
export class EntregadorDataController {
  constructor(private readonly entregadorDataService: EntregadorDataService) {}

  @Post()
  create(@Body() createEntregadorDatumDto: CreateEntregadorDatumDto) {
    return this.entregadorDataService.create(createEntregadorDatumDto);
  }

  @Get()
  findAll() {
    return this.entregadorDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entregadorDataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEntregadorDatumDto: UpdateEntregadorDatumDto) {
    return this.entregadorDataService.update(+id, updateEntregadorDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entregadorDataService.remove(+id);
  }
}
