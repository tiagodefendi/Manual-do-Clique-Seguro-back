import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AdminGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest<Request>();
        const adminSecret = process.env.ADMIN_SECRET;

        // Espera um header 'x-admin-key' com o valor da chave secreta
        if (request.headers['x-admin-key'] === adminSecret) {
            return true;
        }

        throw new UnauthorizedException('Você não tem permissão para acessar esta rota');
    }
}
