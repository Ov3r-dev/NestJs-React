import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FornecedorDataService } from './fornecedor_data.service';
import { CreateFornecedorDatumDto } from './dto/create-fornecedor_datum.dto';
import { UpdateFornecedorDatumDto } from './dto/update-fornecedor_datum.dto';

@Controller('fornecedor-data')
export class FornecedorDataController {
  constructor(private readonly fornecedorDataService: FornecedorDataService) {}

  @Post()
  create(@Body() createFornecedorDatumDto: CreateFornecedorDatumDto) {
    return this.fornecedorDataService.create(createFornecedorDatumDto);
  }

  @Get()
  findAll() {
    return this.fornecedorDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fornecedorDataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFornecedorDatumDto: UpdateFornecedorDatumDto) {
    return this.fornecedorDataService.update(+id, updateFornecedorDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fornecedorDataService.remove(+id);
  }
}
