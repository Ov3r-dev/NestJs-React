import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Request,
  Delete,
  UseGuards,
  Query,
  Param,
} from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/role.decorator';
import { UserRole } from 'src/user/entities/user.entity';
import { RolesGuard } from 'src/auth/role.guards';
@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}
  @Post()
  @UseGuards(AuthGuard('jwt'), RolesGuard) // @@ importante
  @Roles(UserRole.USER, UserRole.ADMIN)
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtosService.create(createProdutoDto);
  }
  @Get()
  findAll(@Request() req, @Query('categoria') categoria?: string) {
    const categoriaId = categoria ? parseInt(categoria, 10) : null;
    return this.produtosService.findAll(categoriaId);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtosService.findOne(+id);
  }
  @Patch(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard) // @@ importante
  @Roles(UserRole.MANAGER)
  update(@Param('id') id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtosService.update(+id, updateProdutoDto);
  }
  @Delete(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard) // @@ importante
  @Roles(UserRole.ADMIN)
  remove(@Param('id') id: string) {
    return this.produtosService.remove(+id);
  }
}
