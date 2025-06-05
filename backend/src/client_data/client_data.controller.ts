import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { ClientDataService } from './client_data.service';
import { CreateClientDatumDto } from './dto/create-client_datum.dto';
import { UpdateClientDatumDto } from './dto/update-client_datum.dto';

@Controller('client-data')
export class ClientDataController {
  constructor(private readonly clientDataService: ClientDataService) {}

  @Post()
  create(@Body() createClientDatumDto: CreateClientDatumDto) {
    return this.clientDataService.create(createClientDatumDto);
  }

  @Get()
  findAll() {
    return this.clientDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientDataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDatumDto: UpdateClientDatumDto) {
    return this.clientDataService.update(+id, updateClientDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientDataService.remove(+id);
  }
}
