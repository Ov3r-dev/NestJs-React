import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards} from
 '@nestjs/common';
 import { ProdutosService } from './produtos.service';
 import { CreateProdutoDto } from './dto/create-produto.dto';
 import { UpdateProdutoDto } from './dto/update-produto.dto';
 import { AuthGuard } from '@nestjs/passport';
 
 @Controller('produtos')
 export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}
 
 @Post()
 @UseGuards(AuthGuard('jwt'))
 create(@Body() createProdutoDto: CreateProdutoDto) {
  return this.produtosService.create(createProdutoDto);
 }
 
 @Get()
 findAll() {
  return this.produtosService.findAll();
 }

 @Get(':id')
 findOne(@Param('id') id: string) {
  return this.produtosService.findOne(+id);
 }

 @Patch(':id')
 @UseGuards(AuthGuard('jwt'))
 update(@Param('id') id: string, @Body() updateProdutoDto:
UpdateProdutoDto) {
  return this.produtosService.update(+id, updateProdutoDto);
 }

 @Delete(':id')
 @UseGuards(AuthGuard('jwt'))
 remove(@Param('id') id: string) {
return this.produtosService.remove(+id);
 }
}