import { Injectable } from '@nestjs/common';

@Injectable()
export class ClassesService {
    // MODULE =================================================================================

    async getAllModules() {
        // Lógica para obter todos os módulos
    }

    async getModuleById(moduleId: string) {
        // Lógica para obter um módulo específico pelo ID
    }

    // CLASSES ================================================================================

    async getAllClassesInModule(moduleId: string) {
        // Lógica para obter todas as classes
    }

    async getClassByIdInModule(moduleId: string, classId: string) {
        // Lógica para obter uma classe específica pelo ID
    }
}
