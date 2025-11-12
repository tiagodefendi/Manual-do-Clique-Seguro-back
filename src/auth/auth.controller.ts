import { Controller, Post, Get, Body, UseGuards, Headers } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdminGuard } from './guards/admin.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('signup')
    signUp(@Body() body: { email: string; password: string }) {
        return this.authService.signUp(body.email, body.password);
    }

    @Post('login')
    login(@Body() body: { email: string; password: string }) {
        return this.authService.signIn(body.email, body.password);
    }

    @Post('logout')
    async logout(@Headers('authorization') authHeader: string) {
        const token = authHeader?.split(' ')[1]; // "Bearer <token>"
        if (!token) throw new Error('Token nao informado');
        return this.authService.logout(token);
    }

    // Rotas de admin protegidas
    @UseGuards(AdminGuard)
    @Get('users')
    listUsers() {
        return this.authService.listUsers();
    }

    @UseGuards(AdminGuard)
    @Post('confirm')
    confirmUser(@Body('userId') userId: string) {
        return this.authService.confirmUser(userId);
    }
}
