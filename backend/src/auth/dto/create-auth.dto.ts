import { IsString, IsEmail } from 'class-validator';
export class RegisterDto {
  @IsString()
  nomeUsuario: string;

  @IsString()
  nome: string;

  @IsString()
  senha: string;

  @IsEmail()
  email: string;
}

export class LoginDto {
  @IsString()
  nomeUsuario: string;

  @IsString()
  senha: string;
}
