/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Categoria } from 'src/categorias/entities/categoria.entity';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  preco: number;

  @Column()
  emailEmpresa: string;

  @Column()
  dataValidade: Date;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => Categoria, (categoria) => categoria.produtos, {
    nullable: false,
  })
  @JoinColumn({ name: 'categoriaId' })
  categoria: Categoria;

  @Column()
  categoriaId: number;
}
