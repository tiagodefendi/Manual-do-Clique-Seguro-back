import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import * as path from 'path';

@Injectable()
export class ClassesService {
    // MODULE =================================================================================

    async getAllModules(): Promise<number[]> {
        try {
            const currentDir = path.join(process.cwd(), 'src', 'classes');

            const entries = await fs.readdir(currentDir, { withFileTypes: true });

            const moduleIds = entries
                .filter(entry =>
                    entry.isDirectory() &&
                    entry.name.startsWith('module_')
                )
                // AQUI: Converte a string resultante para Number
                .map(entry => Number(entry.name.replace('module_', '')));

            // Como agora já são números, o sort fica mais simples
            return moduleIds.sort((a, b) => a - b);

        } catch (error) {
            console.error("Erro ao buscar módulos:", error);
            return [];
        }
    }

    // CLASSES ================================================================================

    async getAllClasses(moduleId: string) {
        // Lógica para obter todas as classes
    }

    async getClassById(moduleId: string, classId: string) {
        // Lógica para obter uma classe específica pelo ID
    }
}
