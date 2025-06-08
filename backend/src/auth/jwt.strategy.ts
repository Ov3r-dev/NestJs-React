import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from 'src/user/user.service';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secretKey', // Substitua por uma chave segura emprodução
    });
  }
  async validate(payload: any) {
    const user = await this.usersService.findOne(payload.sub);
    return {
      userId: payload.sub,
      nomeUsuario: payload.nomeUsuario,
      role: user ? payload.role : null, // Incluir a role do usuário norequest
    };
  }
}
