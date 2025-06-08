import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Entregador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  cpf: string;

  @Column()
  telefone: string;

  @Column()
  veiculo: string;

  @Column({ unique: true })
  nomeUsuario: string;

  @Column()
  senha: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: 'ENTREGADOR' })
  role: string;
}
