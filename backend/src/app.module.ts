import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutosModule } from './produtos/produtos.module';
import { CategoriasModule } from './categorias/categorias.module';
import { Categoria } from './categorias/entities/categoria.entity';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { EntregadorModule } from './entregador_data/entregador_data.module';
import { ClienteModule } from './cliente/cliente.module';
import { CarrinhoModule } from './carrinho/carrinho.module';

@Module({
  imports: [
    EntregadorModule,
    CarrinhoModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User, Categoria, __dirname + '/**/*.entity{.ts,.js,}'],
      synchronize: true,
    }),
    ProdutosModule,
    CategoriasModule,
    UserModule,
    AuthModule,
    ClienteModule,
    CarrinhoModule,
  ],
})
export class AppModule {}
