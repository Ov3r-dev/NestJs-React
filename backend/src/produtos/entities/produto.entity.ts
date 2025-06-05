 import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
 }
