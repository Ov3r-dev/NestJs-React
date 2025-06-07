import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from 'typeorm';
import * as bcrypt from 'bcrypt';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomeUsuario: string;

  @Column()
  nome: string;

  @Column()
  senha: string;

  @Column()
  email: string;
  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.senha) {
      this.senha = await bcrypt.hash(this.senha, 10);
    }
  }
}
