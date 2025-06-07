import { Produto } from 'src/produtos/entities/produto.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  nome: string;

  @Column({ default: true })
  ativa: boolean;

  @OneToMany(() => Produto, (produto) => produto.categoria)
  produtos: Produto[];
}
