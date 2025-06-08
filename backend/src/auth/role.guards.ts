import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './role.decorator';
import { UserRole } from '../user/entities/user.entity';
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    // Se não há roles especificados, permite o acesso
    if (!requiredRoles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    // Verifica se o usuário existe e detém o papel necessário
    if (!user || !user.role) {
      throw new ForbiddenException('Você não tem permissão para acessar este recurso');
    }
    const hasPermission = requiredRoles.some((role) => user.role === role);
    if (!hasPermission) {
      throw new ForbiddenException(`Você precisa ter um dos seguintes
perfis: ${requiredRoles.join(', ')}`);
    }
    return true;
  }
}
