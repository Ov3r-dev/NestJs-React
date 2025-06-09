import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { CarrinhoItem } from 'src/carrinho/entities/carrinho-item.entity';
import { Produto } from 'src/produtos/entities/produto.entity';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  nomeUsuario: string;

  @Column()
  senha: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: 'CLIENTE' })
  role: string;

  @OneToMany(() => CarrinhoItem, (item) => item.cliente)
  carrinho: CarrinhoItem[];

  @ManyToMany(() => Produto, { eager: true })
  @JoinTable()
  favoritos: Produto[];

  
}
