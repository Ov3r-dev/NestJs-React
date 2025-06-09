import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { Patch } from '@nestjs/common';
import { UpdateClienteSenhaDto } from './dto/update-cliente.dto';

@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  create(@Body() dto: CreateClienteDto) {
    return this.clienteService.create(dto);
  }

  @Get()
  findAll() {
    return this.clienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clienteService.findOne(+id);
  }
  
  @Patch(':id/senha')
  updateSenha(@Param('id') id: string, @Body() dto: UpdateClienteSenhaDto) {
  return this.clienteService.updateSenha(+id, dto);
}

  @Patch(':clienteId/favoritos/:produtoId')
adicionarFavorito(
  @Param('clienteId') clienteId: string,
  @Param('produtoId') produtoId: string,
) {
  return this.clienteService.adicionarFavorito(+clienteId, +produtoId);
}

@Delete(':clienteId/favoritos/:produtoId')
removerFavorito(
  @Param('clienteId') clienteId: string,
  @Param('produtoId') produtoId: string,
) {
  return this.clienteService.removerFavorito(+clienteId, +produtoId);
}

@Get(':clienteId/favoritos')
listarFavoritos(@Param('clienteId') clienteId: string) {
  return this.clienteService.listarFavoritos(+clienteId);
}


}
