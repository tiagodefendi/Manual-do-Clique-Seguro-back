import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class AuthService {
    constructor(private readonly supabase: SupabaseService) { }

    // Registro
    async signUp(email: string, password: string) {
        const { data, error } = await this.supabase.client.auth.signUp({ email, password });
        if (error) throw new Error(error.message);
        return data;
    }

    // Login
    async signIn(email: string, password: string) {
        const { data, error } = await this.supabase.client.auth.signInWithPassword({ email, password });
        if (error) throw new Error(error.message);
        return data;
    }

    // Logout
    async logout(accessToken: string) {
        const userClient = this.supabase.createClientWithToken(accessToken);
        const { error } = await userClient.auth.signOut();
        if (error) throw new Error(error.message);
        return { message: 'Logout realizado com sucesso' };
    }

    // Listar usuários (admin)
    async listUsers() {
        const { data, error } = await this.supabase.adminClient.auth.admin.listUsers();
        if (error) throw new Error(error.message);
        return data.users;
    }

    // Confirmar usuário (admin)
    async confirmUser(userId: string) {
        const { data, error } = await this.supabase.adminClient.auth.admin.updateUserById(
            userId,
            { email_confirm: true }
        );
        if (error) throw new Error(error.message);
        return data;
    }
}
