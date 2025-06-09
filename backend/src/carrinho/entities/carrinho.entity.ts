import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn, Column } from 'typeorm';
import { Cliente } from '../../cliente/entities/cliente.entity';
import { CarrinhoItem } from './carrinho-item.entity';

@Entity()
export class Carrinho {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cliente, { eager: true })
  @JoinColumn()
  cliente: Cliente;

  @OneToMany(() => CarrinhoItem, item => item.carrinho, { cascade: true, eager: true })
  itens: CarrinhoItem[];

  @Column({ default: false })
  finalizado: boolean;
}
