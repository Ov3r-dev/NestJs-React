import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CarrinhoService } from './carrinho.service';

@Controller('carrinhos')
export class CarrinhoController {
  constructor(private readonly carrinhoService: CarrinhoService) {}

  @Post('itens')
  async adicionarItem(@Body() body: { clienteId: number; produtoId: number; quantidade: number }) {
    return this.carrinhoService.adicionarItem(body.clienteId, body.produtoId, body.quantidade);
  }

  @Get(':clienteId')
  async verCarrinho(@Param('clienteId') clienteId: number) {
    return this.carrinhoService.verCarrinho(clienteId);
  }

  @Patch(':id/finalizar')
  async finalizar(@Param('id') id: number) {
    return this.carrinhoService.finalizarCompra(id);
  }

  @Delete(':id')
  async remover(@Param('id') id: number) {
    return this.carrinhoService.removerCarrinho(id);
  }

  @Patch('finalizar/:id')
  finalizarCompra(@Param('id') id: number) {
  return this.carrinhoService.finalizarCompra(id);

  }

  @Get()
  findAll() {
    return this.carrinhoService.findAll();
  }

}
