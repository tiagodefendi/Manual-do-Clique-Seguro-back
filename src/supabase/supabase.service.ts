import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
    private supabase: SupabaseClient;       // anon/public key
    private adminSupabase: SupabaseClient;  // service role key

    constructor() {
        // client normal para registro/login
        this.supabase = createClient(
            process.env.SUPABASE_URL!,
            process.env.SUPABASE_KEY!,
        );

        // client admin para operações administrativas
        if (!process.env.SUPABASE_SERVICE_KEY) {
            throw new Error('SUPABASE_SERVICE_KEY não definida no .env');
        }
        this.adminSupabase = createClient(
            process.env.SUPABASE_URL!,
            process.env.SUPABASE_SERVICE_KEY!,
        );
    }

    // Getter para o client normal
    get client() {
        return this.supabase;
    }

    // Getter para o client admin
    get adminClient() {
        return this.adminSupabase;
    }

    // helper para criar um client temporário com token de acesso
    createClientWithToken(accessToken: string): SupabaseClient {
        const tempClient = createClient(
            process.env.SUPABASE_URL!,
            process.env.SUPABASE_KEY!,
            {
                global: {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                },
            }
        );
        return tempClient;
    }
}
