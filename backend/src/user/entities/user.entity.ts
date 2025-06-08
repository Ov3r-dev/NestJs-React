import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from 'typeorm';
import * as bcrypt from 'bcrypt';


export enum UserRole {
  USER = 'USER',
  MANAGER = 'MANAGER',
  ADMIN = 'ADMIN',
}

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

  @Column({
    type: 'varchar',
    default: UserRole.USER,
  })
  role: UserRole;
  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.senha) {
      this.senha = await bcrypt.hash(this.senha, 10);
    }
  }
}
