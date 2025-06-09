import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, JoinColumn } from 'typeorm';
import { Carrinho } from './carrinho.entity';
import { Produto } from '../../produtos/entities/produto.entity';

@Entity()
export class CarrinhoItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Carrinho, carrinho => carrinho.itens)
  @JoinColumn()
  carrinho: Carrinho;

  @ManyToOne(() => Produto, { eager: true })
  @JoinColumn()
  produto: Produto;

  @Column()
  quantidade: number;
  cliente: any;
}
