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
                .map(entry => Number(entry.name.replace('module_', '')));

            return moduleIds.sort();

        } catch (error) {
            console.error("Erro ao buscar módulos:", error);
            return [];
        }
    }

    // CLASSES ================================================================================

    async getAllClasses(moduleId: string): Promise<number[]> {
        try {
            const moduleDir = path.join(process.cwd(), 'src', 'classes', `module_${moduleId}`);

            const entries = await fs.readdir(moduleDir, { withFileTypes: true });

            const classIds = entries
                .filter(entry =>
                    entry.isFile() &&
                    entry.name.startsWith('class_') &&
                    entry.name.endsWith('.json')
                )
                .map(entry => {
                    const idString = entry.name
                        .replace('class_', '')
                        .replace('.json', '');

                    return Number(idString);
                });

            return classIds.sort();

        } catch (error) {
            console.error(`Erro ao buscar aulas do módulo ${moduleId}:`, error);
            return [];
        }
    }


    async getClassById(moduleId: string, classId: string) {
        // Lógica para obter uma classe específica pelo ID
    }
}
