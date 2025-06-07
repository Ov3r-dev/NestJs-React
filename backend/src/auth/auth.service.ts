import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { RegisterDto, LoginDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto): Promise<User> {
    const user = this.userRepository.create(dto);
    return this.userRepository.save(user);
  }

  async login(dto: LoginDto): Promise<{ access_token: string }> {
    const user = await this.userRepository.findOne({
      where: { nomeUsuario: dto.nomeUsuario },
    });

    if (!user || !(await bcrypt.compare(dto.senha, user.senha))) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const payload = { sub: user.id, nomeUsuario: user.nomeUsuario };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(nomeUsuario: string, senha: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { nomeUsuario } });
    if (user && (await bcrypt.compare(senha, user.senha))) {
      return user;
    }
    return null;
  }
}
