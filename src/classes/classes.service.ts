import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import * as path from 'path';

@Injectable()
export class ClassesService {
    // MODULE =================================================================================

    async getAllModules() {
    try {
        const currentDir = __dirname;

        // LOG 1: Veja onde o código está procurando
        console.log("Diretório atual sendo lido:", currentDir);

        const entries = await fs.readdir(currentDir, { withFileTypes: true });

        // LOG 2: Veja tudo o que ele encontrou antes de filtrar
        const allNames = entries.map(e => e.name);
        console.log("Arquivos encontrados:", allNames);

        const moduleIds = entries
            .filter(entry =>
                entry.isDirectory() &&
                entry.name.startsWith('module_')
            )
            .map(entry => entry.name);

        return moduleIds;

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
