import { Controller, Post, Get, Body, UseGuards, Headers, Param } from '@nestjs/common';
import { ClassesService } from './classes.service';

@Controller('classes')
export class ClassesController {
    // O controlador pode ser expandido com endpoints conforme necessário
    constructor(private readonly classesService: ClassesService) {}

    @Get('modules')
    async getAllModules() {
        return this.classesService.getAllModules();
    }

    @Get('modules/:moduleId/classes')
    async getAllClasses(@Param('moduleId') moduleId: string) {
        return this.classesService.getAllClasses(moduleId);
    }
}
