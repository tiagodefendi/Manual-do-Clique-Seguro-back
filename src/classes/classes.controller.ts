import { Controller, Post, Get, Body, UseGuards, Headers, Param } from '@nestjs/common';
import { ClassesService } from './classes.service';

@Controller('classes')
export class ClassesController {
    constructor(private readonly classesService: ClassesService) {}

    @Get('modules')
    async getAllModules() {
        return this.classesService.getAllModules();
    }

    @Get('module/:moduleId')
    async getModuleById(@Param('moduleId') moduleId: string) {
        return this.classesService.getModuleById(moduleId);
    }

    @Get('module/:moduleId/classes')
    async getAllClasses(@Param('moduleId') moduleId: string) {
        return this.classesService.getAllClasses(moduleId);
    }

    @Get('module/:moduleId/class/:classId')
    async getClassById(
        @Param('moduleId') moduleId: string,
        @Param('classId') classId: string
    ) {
        return this.classesService.getClassById(moduleId, classId);
    }
}
