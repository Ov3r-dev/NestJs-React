import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './entities/categoria.entity';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>,
  ) {}

  async create(createCategoriaDto: CreateCategoriaDto): Promise<Categoria> {
    const { nome } = createCategoriaDto;

    const categoriaExistente = await this.categoriaRepository.findOne({
      where: { nome },
    });
    if (categoriaExistente) {
      throw new ConflictException(`Categoria com nome "${nome}" já
 existe`);
    }

    const categoria = this.categoriaRepository.create({
      ...createCategoriaDto,
      ativa: createCategoriaDto.ativa ?? true,
    });
    return this.categoriaRepository.save(categoria);
  }
  async findAll(): Promise<Categoria[]> {
    return this.categoriaRepository.find({
      relations: ['produtos'],
    });
  }
  async findOne(id: number): Promise<Categoria> {
    const categoria = await this.categoriaRepository.findOne({
      where: { id },
      relations: ['produtos'],
    });
    if (!categoria) {
      throw new NotFoundException(`Categoria com ID ${id} não encontrada`);
    }
    return categoria;
  }
  async update(id: number, updateCategoriaDto: UpdateCategoriaDto): Promise<Categoria> {
    const categoria = await this.findOne(id);
    if (updateCategoriaDto.nome && updateCategoriaDto.nome !== categoria.nome) {
      const categoriaExistente = await this.categoriaRepository.findOne({
        where: { nome: updateCategoriaDto.nome },
      });
      if (categoriaExistente) {
        throw new ConflictException(`Categoria com nome
 "${updateCategoriaDto.nome}" já existe`);
      }
    }
    Object.assign(categoria, updateCategoriaDto);
    return this.categoriaRepository.save(categoria);
  }

  async remove(id: number): Promise<void> {
    const categoria = await this.findOne(id); // Verifica existência

    if (categoria.produtos && categoria.produtos.length > 0) {
      throw new ConflictException('Não é possível excluir uma categoria com produtos associados');
    }
    await this.categoriaRepository.delete(id);

    console.log('DTO recebido:', CreateCategoriaDto);
  }
}
